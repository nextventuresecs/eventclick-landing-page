/**
 * Submits a demo or support request to the Eventclick API.
 *
 * The marketing site has no backend of its own — no API routes, no secrets in
 * its deploy environment — so this posts cross-origin to the application
 * server, which owns the Resend credential and the rate limiting. The API
 * origin is already present in the server's CORS allowlist.
 */
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.eventclick.live/api/v1";

export type ContactRequestKind = "demo" | "support";

export interface ContactRequest {
  kind: ContactRequestKind;
  fullName: string;
  workEmail: string;
  orgName: string;
  teamSize?: string;
  useCase?: string;
  supportType?: string;
  additionalContext?: string;
  consentGiven?: boolean;
}

export class ContactSubmitError extends Error {}

export const submitContactRequest = async (
  request: ContactRequest,
): Promise<void> => {
  let response: Response;
  try {
    response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });
  } catch {
    // Network-level failure: offline, DNS, blocked. There is nothing the
    // visitor can act on beyond trying again.
    throw new ContactSubmitError(
      "We could not reach our servers. Please check your connection and try again.",
    );
  }

  if (response.status === 429) {
    throw new ContactSubmitError(
      "Too many requests from this network. Please try again in a few minutes.",
    );
  }

  if (!response.ok) {
    throw new ContactSubmitError(
      "Something went wrong submitting your request. Please email us directly at support@eventclick.live.",
    );
  }
};

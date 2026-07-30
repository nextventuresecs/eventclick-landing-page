'use client';

import FaqSectionScroller, { FaqData } from '@/components/ui/habit-faq-scroller';

export default function FaqSection() {
  const faqData: FaqData = {
    mainTitle: "Frequently Asked Questions",
    mainSubtitle:
      "Everything you need to know about Eventclick's verified event streaming, geotagged photo proof, RBAC permissions, and compliance security.",
    rows: [
      {
        id: 'row1',
        speed: '50s',
        direction: 'left',
        faqItems: [
          {
            id: 'q1',
            category: 'QC Gates',
            question: 'What happens if a room is missing required photos?',
            answer:
              'The application enforces a completion gate. When an Event Admin or Org Admin attempts to close a room, the system evaluates all submitted photos against quota rules. If any quota is unmet, completion is strictly blocked.'
          },
          {
            id: 'q2',
            category: 'LiveKit Broadcast',
            question: 'What if the primary live stream fails in the field?',
            answer:
              'Eventclick utilizes LiveKit WebRTC for low-latency streaming. If WebRTC connectivity fails or cellular bandwidth degrades, the room automatically fails over to an embedded YouTube or HLS backup stream.'
          },
          {
            id: 'q3',
            category: 'Security & S3',
            question: 'Who can see attendance photos and field evidence?',
            answer:
              'Photos are stored in private cloud S3 buckets with public access blocked. Authorized users receive 15-minute cryptographically signed URLs that expire automatically.'
          },
          {
            id: 'q4',
            category: 'JWT Security',
            question: 'How does token rotation defend against replay attacks?',
            answer:
              'Every token refresh revokes the prior refresh token and issues a new pair. If a revoked token is reused, the server immediately revokes all active sessions for that user.'
          }
        ]
      },
      {
        id: 'row2',
        speed: '40s',
        direction: 'right',
        faqItems: [
          {
            id: 'q5',
            category: 'RBAC Controls',
            question: 'Can volunteers access administrative reporting?',
            answer:
              'No. Role-based access control (RBAC) limits field volunteers to live room viewing, sharing viewer links, and submitting attendee intake forms with camera photos.'
          },
          {
            id: 'q6',
            category: 'Dynamic Forms',
            question: 'How are attendee intake forms attached to event rooms?',
            answer:
              'Admins build dynamic forms using the form builder module and attach them to event rooms. Volunteers then fill out that exact schema during attendee intake.'
          },
          {
            id: 'q7',
            category: 'Geotag Integrity',
            question: 'How are field coordinates and timestamps verified?',
            answer:
              'Every camera photo capture embeds browser GPS telemetry and server NTP timestamps, preventing manual device time manipulation or location spoofing.'
          },
          {
            id: 'q8',
            category: 'Audit Export',
            question: 'Can event data be exported for external donor audits?',
            answer:
              'Yes! Org Admins can export complete compliance audit packages containing CSV intake logs, signed photo proof URLs, and stream spectator analytics.'
          }
        ]
      },
      {
        id: 'row3',
        speed: '55s',
        direction: 'left',
        faqItems: [
          {
            id: 'q9',
            category: 'Compatibility',
            question: 'What browsers and devices are supported in the field?',
            answer:
              'Eventclick runs on standard mobile and desktop web browsers (Chrome, Safari, Firefox, Edge) without requiring field volunteers to install native apps.'
          },
          {
            id: 'q10',
            category: 'Stream Scale',
            question: 'Is there a limit on spectator capacity during broadcasts?',
            answer:
              'Eventclick leverages edge-distributed WebRTC media servers to support hundreds of concurrent spectator connections per active event room.'
          },
          {
            id: 'q11',
            category: 'Compliance',
            question: 'How does Eventclick protect beneficiary data under GDPR?',
            answer:
              'All participant intake records are encrypted in transit and at rest, with configurable organizational retention policies and full right-to-erasure support.'
          },
          {
            id: 'q12',
            category: 'Offline Sync',
            question: 'Can field volunteers work in low-connectivity zones?',
            answer:
              'Yes. Photo forms queue locally on the field worker device and automatically synchronize once cellular or Wi-Fi connectivity is re-established.'
          }
        ]
      }
    ]
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F5F3FC] border-t border-[#E2E5ED] overflow-hidden">
      <FaqSectionScroller data={faqData} />
    </section>
  );
}

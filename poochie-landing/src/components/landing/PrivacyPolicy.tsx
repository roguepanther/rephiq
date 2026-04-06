export default function PrivacyPolicy() {
  return (
    <article className="text-white">
      <header className="border-b border-white/5 pb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Rephiq Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-zinc-400">
          Effective Date: April 6, 2026
        </p>
        <p className="mt-1 text-sm text-zinc-400">
          Last Updated: April 6, 2026
        </p>
      </header>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-zinc-400">
        <p>
          Rephiq (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the
          Rephiq mobile application (the &quot;App&quot;). This Privacy Policy
          explains how we collect, use, store, share, and protect your personal
          information when you use the App.
        </p>
        <p>
          By using Rephiq, you agree to the practices described in this Privacy
          Policy. If you do not agree, please do not use the App.
        </p>

        <section aria-labelledby="s1">
          <h2
            id="s1"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            1. Information We Collect
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-medium text-zinc-200">1.1 Account Information</h3>
              <p className="mt-3">
                When you create an account, we collect the information provided
                by your authentication provider:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="text-zinc-300">Google Sign-In:</span> Your
                  name and email address as associated with your Google account.
                </li>
                <li>
                  <span className="text-zinc-300">Sign in with Apple:</span> Your
                  name (if provided) and email address (which may be a private
                  relay address if you choose to hide your email).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">1.2 Profile Information</h3>
              <p className="mt-3">
                During onboarding and profile setup, you may provide:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>First name and last name</li>
                <li>Date of birth</li>
                <li>Gender</li>
                <li>Height and weight</li>
                <li>
                  Fitness goal, experience level, and training preferences
                </li>
                <li>Available equipment and workout location</li>
                <li>Preferred workout duration and training days per week</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.3 Social Profile Information
              </h3>
              <p className="mt-3">
                If you use our social features, you may additionally provide:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Display name and username</li>
                <li>Profile photo (avatar)</li>
                <li>Bio</li>
                <li>Instagram and X (Twitter) handles</li>
                <li>Preferred workout types</li>
                <li>Public/private profile preference</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.4 Workout and Exercise Data
              </h3>
              <p className="mt-3">
                When you use the App to log workouts, we collect:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Exercise names, sets, repetitions, weights, and rest times
                </li>
                <li>Workout duration, start and end times</li>
                <li>Workout templates and training programmes</li>
                <li>Personal records and strength milestones</li>
                <li>Rate of perceived exertion (RPE)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.5 Body Measurements and Progress Photos
              </h3>
              <p className="mt-3">You may optionally record:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Body weight measurements over time</li>
                <li>
                  Progress photos (front, side, back), including the date each
                  photo was taken
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.6 Health Platform Data
              </h3>
              <p className="mt-3">
                With your explicit permission, the App integrates with Apple
                HealthKit (iOS) and Health Connect (Android) to write the
                following data:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Completed strength training workout sessions (duration and
                  estimated calories burned)
                </li>
                <li>Body weight measurements</li>
              </ul>
              <p className="mt-3">
                We do not read data from your health platform. Data is only
                written with your opt-in consent, and you can revoke this
                permission at any time in the App&apos;s settings or your
                device&apos;s health settings.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.7 Social Interaction Data
              </h3>
              <p className="mt-3">
                When you use social features, we collect:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Follow relationships (who you follow and who follows you)</li>
                <li>Shared workout posts, including captions</li>
                <li>Likes and comments on posts</li>
                <li>Abuse and content reports</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.8 Purchase Information
              </h3>
              <p className="mt-3">
                If you subscribe to Rephiq Pro, we use RevenueCat to manage
                in-app purchases. We store:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Your premium subscription status</li>
                <li>A unique purchase identifier linked to your account</li>
              </ul>
              <p className="mt-3">
                We do not store or have access to your payment card details,
                billing address, or other financial information. All payment
                processing is handled by Apple (App Store), Google (Google
                Play), and RevenueCat.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.9 Usage and Analytics Data
              </h3>
              <p className="mt-3">
                We automatically collect anonymised usage data to improve the App:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Feature usage events (e.g., workout started, workout completed,
                  template created)
                </li>
                <li>Screen views</li>
                <li>
                  App performance and error data (crash reports and stack traces)
                </li>
              </ul>
              <p className="mt-3">
                This data does not include personally identifiable information.
                We do not track your activity outside of the Rephiq app.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                1.10 Device and Technical Data
              </h3>
              <p className="mt-3">
                We collect limited technical data necessary for the App to
                function:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Device type and operating system version</li>
                <li>App version</li>
                <li>Timezone (for scheduling local notifications)</li>
              </ul>
              <p className="mt-3">
                We do not collect device identifiers, IP addresses (beyond what is
                automatically logged by our infrastructure providers), location
                data, contacts, calendar data, or browsing history.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="s2">
          <h2
            id="s2"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            2. How We Use Your Information
          </h2>
          <p className="mt-4">We use the information we collect to:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <span className="text-zinc-300">Provide the App&apos;s core functionality:</span>{" "}
              Log workouts, track progress, generate training programmes,
              calculate personal records, and display your training history.
            </li>
            <li>
              <span className="text-zinc-300">Personalise your experience:</span>{" "}
              Tailor workout recommendations, coaching insights, and progression
              guidance based on your goals, experience level, and training
              history.
            </li>
            <li>
              <span className="text-zinc-300">Enable social features:</span>{" "}
              Allow you to share workouts, follow other users, participate in
              leaderboards, and interact with the community.
            </li>
            <li>
              <span className="text-zinc-300">Sync your data:</span> Keep your
              workout data synchronised across your devices via secure cloud
              storage.
            </li>
            <li>
              <span className="text-zinc-300">Process purchases:</span> Manage
              your Rephiq Pro subscription and unlock premium features.
            </li>
            <li>
              <span className="text-zinc-300">Send notifications:</span> Deliver
              workout reminders and streak notifications (only with your
              permission).
            </li>
            <li>
              <span className="text-zinc-300">Improve the App:</span> Analyse
              anonymised usage patterns to fix bugs, improve performance, and
              develop new features.
            </li>
            <li>
              <span className="text-zinc-300">Ensure safety:</span> Moderate
              social content and respond to abuse reports.
            </li>
          </ul>
          <p className="mt-4">
            We do not use your data for advertising, sell your data to third
            parties, or create advertising profiles.
          </p>
        </section>

        <section aria-labelledby="s3">
          <h2
            id="s3"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            3. How We Store and Protect Your Information
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-medium text-zinc-200">3.1 Storage Locations</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="text-zinc-300">On your device:</span> Workout
                  data, preferences, and cached content are stored locally in an
                  encrypted SQLite database.
                </li>
                <li>
                  <span className="text-zinc-300">In the cloud:</span> Your data
                  is synchronised to Google Cloud Firestore (database) and
                  Firebase Storage (photos and avatars), hosted on Google Cloud
                  infrastructure.
                </li>
                <li>
                  <span className="text-zinc-300">Preferences:</span> App
                  settings (units, rest timer, theme) are stored locally on your
                  device and are not synced to the cloud.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">3.2 Security Measures</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  All data transmitted between the App and our servers is
                  encrypted using TLS (Transport Layer Security).
                </li>
                <li>
                  Cloud data is protected by Firebase security rules that enforce
                  user-level access control — you can only read and write your
                  own data.
                </li>
                <li>
                  Authentication is handled by Firebase Authentication using
                  industry-standard OAuth 2.0 protocols.
                </li>
                <li>
                  Social profile data has granular access controls: private
                  profiles are only visible to approved followers.
                </li>
                <li>
                  Firebase App Check is used to verify that requests to our
                  backend originate from genuine instances of the App.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="s4">
          <h2
            id="s4"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            4. Third-Party Services
          </h2>
          <p className="mt-4">
            We use the following third-party services, each with their own privacy
            policies:
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-4 py-3 font-medium text-zinc-200">
                    Service
                  </th>
                  <th className="px-4 py-3 font-medium text-zinc-200">
                    Purpose
                  </th>
                  <th className="px-4 py-3 font-medium text-zinc-200">
                    Data Shared
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-4 py-3 align-top text-zinc-300">
                    Google Firebase (Authentication, Firestore, Storage,
                    Analytics, Crashlytics, Remote Config, App Check)
                  </td>
                  <td className="px-4 py-3 align-top">
                    Backend infrastructure, authentication, data storage,
                    analytics, error monitoring
                  </td>
                  <td className="px-4 py-3 align-top">
                    Account data, workout data, usage events, crash reports
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top text-zinc-300">
                    Google Sign-In
                  </td>
                  <td className="px-4 py-3 align-top">Account authentication</td>
                  <td className="px-4 py-3 align-top">
                    Authentication credentials
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top text-zinc-300">
                    Apple Sign in with Apple
                  </td>
                  <td className="px-4 py-3 align-top">Account authentication</td>
                  <td className="px-4 py-3 align-top">
                    Authentication credentials
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top text-zinc-300">
                    RevenueCat
                  </td>
                  <td className="px-4 py-3 align-top">
                    In-app purchase and subscription management
                  </td>
                  <td className="px-4 py-3 align-top">
                    User identifier, purchase status
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top text-zinc-300">
                    Apple HealthKit / Google Health Connect
                  </td>
                  <td className="px-4 py-3 align-top">
                    Health data integration (write-only)
                  </td>
                  <td className="px-4 py-3 align-top">
                    Workout sessions, calories, body weight
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top text-zinc-300">
                    Google Fonts
                  </td>
                  <td className="px-4 py-3 align-top">Typography rendering</td>
                  <td className="px-4 py-3 align-top">
                    Font file requests (no user data)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top text-zinc-300">
                    OpenAI / Google Gemini / DeepSeek
                  </td>
                  <td className="px-4 py-3 align-top">
                    AI-powered workout template generation
                  </td>
                  <td className="px-4 py-3 align-top">
                    Workout parameters only (goal, muscle groups, exercise
                    count); no personal information is sent
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6">
            We encourage you to review the privacy policies of these services:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <a
                href="https://policies.google.com/privacy"
                className="text-zinc-300 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/40"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-zinc-300 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/40"
                rel="noopener noreferrer"
                target="_blank"
              >
                Apple Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.revenuecat.com/privacy"
                className="text-zinc-300 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/40"
                rel="noopener noreferrer"
                target="_blank"
              >
                RevenueCat Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://openai.com/policies/privacy-policy"
                className="text-zinc-300 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/40"
                rel="noopener noreferrer"
                target="_blank"
              >
                OpenAI Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="s5">
          <h2
            id="s5"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            5. Data Sharing
          </h2>
          <p className="mt-4">
            We do not sell, rent, or trade your personal information to third
            parties.
          </p>
          <p className="mt-4">We share data only in the following limited circumstances:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>
              <span className="text-zinc-300">With your consent:</span> Social
              features you choose to make public (workout posts, public profile)
              are visible to other users.
            </li>
            <li>
              <span className="text-zinc-300">Service providers:</span> The
              third-party services listed above process data on our behalf to
              provide the App&apos;s functionality.
            </li>
            <li>
              <span className="text-zinc-300">Legal requirements:</span> We may
              disclose information if required by law, legal process, or to
              protect the rights, safety, or property of Rephiq, our users, or the
              public.
            </li>
          </ul>
        </section>

        <section aria-labelledby="s6">
          <h2
            id="s6"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            6. Your Rights and Choices
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-medium text-zinc-200">6.1 Access and Export</h3>
              <p className="mt-3">
                You can export your workout data and body measurements from the
                App&apos;s Settings screen in CSV or JSON format at any time.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">6.2 Account Deletion</h3>
              <p className="mt-3">
                You can permanently delete your account from the App&apos;s
                Settings screen. This immediately and irreversibly removes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Your user profile and all personal information</li>
                <li>All workout data, templates, and exercise history</li>
                <li>
                  All social profile data, posts, comments, and follow
                  relationships
                </li>
                <li>All progress photos from our servers</li>
                <li>All leaderboard entries</li>
                <li>All AI usage records</li>
              </ul>
              <p className="mt-3">This action cannot be undone.</p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                6.3 Notification Preferences
              </h3>
              <p className="mt-3">
                You can enable or disable workout reminder notifications at any
                time in the App&apos;s Settings. You can also revoke notification
                permissions at the operating system level.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                6.4 Health Data Permissions
              </h3>
              <p className="mt-3">
                You can enable or disable HealthKit/Health Connect integration at
                any time in the App&apos;s Settings. Revoking permission stops all
                future health data writes. Data previously written to your health
                platform remains under your control via your device&apos;s Health
                app.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                6.5 Social Profile Visibility
              </h3>
              <p className="mt-3">
                You can set your social profile to private at any time,
                restricting visibility to approved followers only.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">
                6.6 Data Portability and Requests
              </h3>
              <p className="mt-3">
                To request a copy of your data, ask questions about our data
                practices, or exercise any privacy rights, contact us at{" "}
                <a
                  href="mailto:support@rephiq.com"
                  className="text-zinc-300 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/40"
                >
                  support@rephiq.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="s7">
          <h2
            id="s7"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            7. Children&apos;s Privacy
          </h2>
          <p className="mt-4">
            Rephiq is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. The App
            enforces a minimum age of 13 during account setup. If we become aware
            that we have collected data from a child under 13, we will promptly
            delete it.
          </p>
        </section>

        <section aria-labelledby="s8">
          <h2
            id="s8"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            8. International Data Transfers
          </h2>
          <p className="mt-4">
            Your data is stored on Google Cloud infrastructure, which may be
            located in the United States or other countries. By using the App, you
            consent to the transfer of your information to these locations. We
            rely on Google&apos;s data processing agreements and standard
            contractual clauses to ensure adequate protection for international
            transfers.
          </p>
        </section>

        <section aria-labelledby="s9">
          <h2
            id="s9"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            9. Data Retention
          </h2>
          <p className="mt-4">
            We retain your data for as long as your account is active. If you
            delete your account, all associated data is permanently removed from
            our systems as described in Section 6.2.
          </p>
          <p className="mt-4">
            Anonymised analytics data (which cannot be linked back to you) may be
            retained indefinitely for product improvement purposes.
          </p>
        </section>

        <section aria-labelledby="s10">
          <h2
            id="s10"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            10. Changes to This Privacy Policy
          </h2>
          <p className="mt-4">
            We may update this Privacy Policy from time to time. When we make
            material changes, we will notify you through the App or by updating
            the &quot;Last Updated&quot; date at the top of this page. Your
            continued use of the App after changes are posted constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section aria-labelledby="s11">
          <h2
            id="s11"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            11. Contact Us
          </h2>
          <p className="mt-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at:
          </p>
          <ul className="mt-4 list-none space-y-2 pl-0">
            <li>
              <span className="text-zinc-300">Email:</span>{" "}
              <a
                href="mailto:support@rephiq.com"
                className="underline decoration-white/20 underline-offset-4 transition hover:text-zinc-200 hover:decoration-white/40"
              >
                support@rephiq.com
              </a>
            </li>
            <li>
              <span className="text-zinc-300">Website:</span>{" "}
              <a
                href="https://rephiq.com"
                className="underline decoration-white/20 underline-offset-4 transition hover:text-zinc-200 hover:decoration-white/40"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://rephiq.com
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="s12">
          <h2
            id="s12"
            className="text-lg font-semibold tracking-tight text-white sm:text-xl"
          >
            12. Jurisdiction-Specific Disclosures
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-medium text-zinc-200">
                For European Economic Area (EEA) and UK Residents
              </h3>
              <p className="mt-3">
                Under the General Data Protection Regulation (GDPR), the legal
                bases for processing your data are:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="text-zinc-300">Contract performance:</span>{" "}
                  Processing necessary to provide the App&apos;s services
                  (workout tracking, data sync, programme generation).
                </li>
                <li>
                  <span className="text-zinc-300">Legitimate interests:</span>{" "}
                  Analytics and error monitoring to improve the App.
                </li>
                <li>
                  <span className="text-zinc-300">Consent:</span> Health data
                  integration, push notifications, and social features.
                </li>
              </ul>
              <p className="mt-3">
                You have the right to access, rectify, erase, restrict processing,
                and port your data. You also have the right to withdraw consent
                and lodge a complaint with your local data protection authority.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">For California Residents</h3>
              <p className="mt-3">
                Under the California Consumer Privacy Act (CCPA), you have the
                right to know what personal information we collect, request
                deletion, and opt out of the sale of personal information. We do
                not sell personal information.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-zinc-200">For Australian Residents</h3>
              <p className="mt-3">
                We comply with the Australian Privacy Principles (APPs) under the
                Privacy Act 1988. You may contact us to access or correct your
                personal information or make a privacy complaint.
              </p>
            </div>
          </div>
        </section>

        <p className="border-t border-white/5 pt-10 text-xs text-zinc-500">
          This privacy policy was last reviewed and updated on April 6, 2026.
        </p>
      </div>
    </article>
  );
}

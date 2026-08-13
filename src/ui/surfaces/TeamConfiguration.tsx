import {
  Card,
  CardTitle,
  Link,
  TeamConfigurationSurface,
} from "@netlify/sdk/ui/react/components";

export function TeamConfiguration() {
  return (
    <TeamConfigurationSurface>
      <Card>
        <CardTitle>Set up Simple Analytics</CardTitle>

        <div className="tw-pt-6 tw-max-w-170">
          <p>Simple Analytics is installed on your Netlify team. To start collecting analytics:</p>

          <ol className="tw-list-decimal tw-pl-6 tw-py-4">
            <li>Open a project.</li>
            <li>
              Select <strong>Simple Analytics</strong> in the project navigation.
            </li>
            <li>Enable Simple Analytics and save the settings.</li>
            <li>Trigger a production deploy.</li>
          </ol>

          <p>
            You don't need a Simple Analytics site ID. Your project's hostname is used
            automatically.
          </p>

          <p className="tw-pt-4">
            <Link href="https://dashboard.simpleanalytics.com/?utm_source=netlify&utm_content=team-configuration">
              Open the Simple Analytics dashboard
            </Link>
            {" to add your domain and view your analytics."}
          </p>
        </div>
      </Card>
    </TeamConfigurationSurface>
  );
}

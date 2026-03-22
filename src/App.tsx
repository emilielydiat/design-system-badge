import { Badge } from "./components/Badge/Badge";
import { MockBadgeIcon } from "./components/Badge/MockBadgeIcon";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">Design system setup</h1>
      <p className="text-sm text-gray-600 mb-2">
        Use Storybook to view, test and document the Badge component.
      </p>
      <Badge label="Add text" icon={<MockBadgeIcon />} />
    </div>
  );
}

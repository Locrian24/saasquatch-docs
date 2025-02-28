import React from "react";
import { useRouteData } from "react-static";

import TocFrame from "../../components/TocFrame";
import { Properties } from "../../components/Properties";
import exampleSwaggerSchema from "../../../metalsmith/filters/exampleSwaggerSchemaFilter";

const entry = {
  title: "Theme Field Reference",
  highlights: `Your handlebar template files are provided with variables called a "context". This reference explains each of these fields.`,
  slug: "themes/fields",
  template: "pages/themeFields.html",
  sectionType: "themes"
};

export default () => {
  const { ThemeContext }: any = useRouteData();

  return (
    <TocFrame entry={entry}>
      <h3>Example</h3>
      <Properties schema={ThemeContext} />

      <pre className="jsonview">
        <code>
          {JSON.stringify(exampleSwaggerSchema(ThemeContext), null, 2)} */}
        </code>
      </pre>

      <h3>JSON Schema</h3>
      <pre className="jsonview">
        <code>{JSON.stringify(ThemeContext, null, 2)}</code>
      </pre>
    </TocFrame>
  );
};

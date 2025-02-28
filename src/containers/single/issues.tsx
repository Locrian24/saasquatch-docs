import React from "react";
import { useRouteData } from "react-static";

import Markdown from "../../components/Markdown";
import PageHeader from "../../components/PageHeader";

const entry = {
  title: "squatch.js Issue Code List",
  highlights: `During implementation of <a href="/developer/squatchjs/">squatch.js</a> you might run into one of these issue codes; click on an issue code for more details.`,
  sectionType: "jsReference"
} as const;

export default function render() {
  // TODO: Wire up to actual list of issues
  const { issues } = useRouteData();

  return (
    <PageHeader {...entry}>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Code</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => {
              const anchor = "/squatchjs/issue/" + issue.title;
              return (
                <tr>
                  <td>
                    <a href={anchor}>{issue.title}</a>
                  </td>
                  <td>
                    <Markdown source={issue.highlights} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageHeader>
  );
}

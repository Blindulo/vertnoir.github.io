import React from "react";
import "../css/link.css";

const Link = (props) => {
  const rows = props.row.map((links) => (
    <tr key={links.text}>
      <td>
        <a href={links.url ?? links.url}>{links.text}</a>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>{props.head}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Link;

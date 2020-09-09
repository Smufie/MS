/* eslint-disable no-undef */ //    TODO eslint i Jest
// TODO given when then
// TODO konwencja should
import TableComponent from "../components/TableComponent";

describe("Table component tests", () => {
  test("create component", () => {
    const targetID = "table-space";
    const table = new TableComponent(targetID);

    expect(table.targetID).toBe("table-space");
  });

  test("should render component", () => {
    const targetID = "table-space";
    const divElement = document.createElement("div");
    divElement.id = targetID;
    document.body.appendChild(divElement);

    const table = new TableComponent(targetID);

    table.renderTo(document.body);
    expect(document.getElementById(targetID)).not.toBe(undefined); // TODO bibilioteka do asercji (chai)
  });
});

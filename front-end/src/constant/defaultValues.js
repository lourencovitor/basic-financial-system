import formatValue from "../utils/formatValue";

const values = [
  { id: "491df589-0e73-4834-93a7-85f07287627b", type: "input", value: 132417 },
  { id: "3198e588-f97a-42a7-a706-32842daa0279", type: "output", value: 140350 },
  { id: "4183e5d2-ce07-4689-9447-7ae78ac17cd0", type: "output", value: 6048 },
  { id: "2e45202e-bb3f-4a7a-a41a-797ee03e1187", type: "input", value: 32716 },
  { id: "a23c8277-ff2a-4f49-bede-d1bb69cfc774", type: "input", value: 37602 },
  { id: "0ba79d15-53ef-4bdc-a063-a05fcf2651b9", type: "input", value: 254754 },
  { id: "bc77edbf-b846-4398-aafe-8d5e6af4a2aa", type: "input", value: 83019 },
];

const options = [
  {
    value: "input",
    label: "Input",
  },
  {
    value: "output",
    label: "Output",
  },
];

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "entryandExitType", label: "Type", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
  {
    id: "value",
    label: "Value",
    minWidth: 170,
  },
  { id: "action", label: "Action", minWidth: 70 },
];

export { values, options, columns };

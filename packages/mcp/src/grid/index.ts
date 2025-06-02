import { z } from "zod";
import { defineComponentTool } from "../utils/defineComponentTool";
import resourcesZh from "./resouces.zh.md?raw";
import resourcesEn from "./resouces.en.md?raw";
import { t } from "../utils/locale";

export const resources = {
  zh: resourcesZh,
  en: resourcesEn,
};

export const getGridConfig = () =>
  defineComponentTool({
    name: "grid_component_tools",
    description: t("ai.grid.description"),
    tools: {
      scollToRow: {
        paramsSchema: z.number().optional().describe(t("ai.grid.scrollToRow")),
        cb: (instance, value) => {
          const tableData = instance.getData();
          const targetRow = tableData[value];
          if (targetRow) {
            instance.scrollToRow(targetRow);
            return { type: "text", text: "success" };
          }
        },
      },
      getTableData: {
        paramsSchema: z
          .boolean()
          .optional()
          .describe(t("ai.grid.getTableData")),
        cb: (instance) => {
          const tableData = instance.getData();
          return { type: "text", text: JSON.stringify(tableData) };
        },
      },
      setSelection: {
        paramsSchema: z.number().optional().describe(t("ai.grid.setSelection")),
        cb: (instance, value) => {
          const tableData = instance.getData();
          const targetRow = tableData[value];
          if (targetRow) {
            instance.setSelection(targetRow, true);
            return { type: "text", text: "success" };
          }
        },
      },
      setAllSelection: {
        paramsSchema: z
          .boolean()
          .optional()
          .describe(t("ai.grid.setAllSelection")),
        cb: (instance, value) => {
          instance.setAllSelection(value);
          return { type: "text", text: "success" };
        },
      },
    },
  });

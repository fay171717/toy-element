import { describe,it,expect } from "vitest"
import {map,get} from "lodash-es"
import{
    ErAlert,
    ErButton,
    ErButtonGroup,
    ErCollapse,
    ErCollapseItem,
    ErIcon
} from "..";

interface Plugin {
  install: (app: any) => void;
}

const components = [
  ErAlert,
  ErButton,
  ErButtonGroup,
  ErCollapse,
  ErCollapseItem,
  ErIcon
] as Plugin[];
  

  describe("components/index.ts", () => {
    it.each(map(components, (c) => [get(c, "name") ?? "", c]))("%s should be exported", (_, component) => {
      expect(component).toBeDefined();
      expect(component.install).toBeDefined()
    });
    
    
    })

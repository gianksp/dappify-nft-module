import block from "./components/block";
import properties from "./components/properties";

const Plugin = (editor) => {
  console.log(`Loading ${process.env.MODULE_ID}`);
  const id = process.env.MODULE_ID;
  editor.BlockManager.add(id, block);
  editor.DomComponents.addType(id, properties);
};

export default Plugin;

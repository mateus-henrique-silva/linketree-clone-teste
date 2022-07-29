
// Create new plugin instance
const defaultLayoutPluginInstance = defaultLayoutPlugin();

<Viewer
fileUrl='../../assets/pdf/cod.pdf'
plugins={[
    // Register plugins
    defaultLayoutPluginInstance,
    ...
]}
/>
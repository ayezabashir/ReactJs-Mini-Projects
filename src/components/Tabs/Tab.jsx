import Tabs from "./Tabs"
import tabContent from "./data"
const Tab = () => {
    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex)
    }
    return <Tabs tabsContent={tabContent} onChange={handleChange} />
}

export default Tab

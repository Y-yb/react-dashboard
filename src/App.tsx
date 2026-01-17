import "./index.css";
import { Tooltip } from "antd";
import SideNav from "./components/SideNav";
import YieldAntTable from "./components/YieldAntTable";
import UnknownTable from "./components/UnknownTable";
import SupplyPipeline from "./components/SupplyPipeline";
import FPYTable from "./components/FPYTable";

function App() {

  // YieldTable示例数据
  const yieldColumns = [{ title: "MCH/HSG" }, { title: "BGA/Chassis" }];

  const yieldRows = [
    {
      name: "V53",
      values: [
        {
          value: "96.6%",
          target: "94.7%",
          color: "#4CAF50",
        },
        {
          value: "99.4%",
          target: "99.2%",
          color: "#4CAF50",
        },
      ],
    },
    {
      name: "V54",
      values: [
        {
          value: "94.9%",
          target: "94.7%",
          color: "#4CAF50",
        },
        {
          value: "99.7%",
          target: "99.2%",
          color: "#4CAF50",
        },
      ],
    },
    {
      name: "V57",
      values: [
        {
          value: "96.1%",
          target: "97.3%",
          color: "#FF9800",
        },
        {
          value: "100.0%",
          target: "99.3%",
          color: "#4CAF50",
        },
      ],
    },
  ];

  // FPY Table示例数据 - MCH/HSG
  const mchHsgDates = ['12/8', '12/9', '12/10', '12/11', '12/12', '12/13'];
  
  const mchHsgProjects = [
    {
      name: 'V53',
      sites: [
        {
          name: 'FAZ',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '97.9%', trend: null, color: 'green' },
            { value: '97.7%', trend: 'down', color: 'green' },
            { value: '98.0%', trend: 'up', color: 'green' },
            { value: '96.9%', trend: 'down', color: 'green' },
            { value: '96.2%', trend: 'down', color: 'green' },
            { value: '95.9%', trend: 'down', color: 'green' },
          ],
        },
        {
          name: 'FGL',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '97.0%', trend: null, color: 'green' },
            { value: '97.5%', trend: 'up', color: 'green' },
            { value: '91.7%', trend: 'down', color: 'orange' },
            { value: '95.9%', trend: 'up', color: 'green' },
            { value: '94.7%', trend: 'down', color: 'orange' },
            { value: '95.2%', trend: 'up', color: 'green' },
          ],
        },
        {
          name: 'FTY',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '98.1%', trend: null, color: 'green' },
            { value: '97.8%', trend: 'down', color: 'green' },
            { value: '97.0%', trend: 'down', color: 'green' },
            { value: '97.1%', trend: 'up', color: 'green' },
            { value: '96.6%', trend: 'down', color: 'green' },
            { value: '95.4%', trend: 'down', color: 'green' },
          ],
        },
        {
          name: 'LK-FAZ',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '96.5%', trend: null, color: 'green' },
            { value: '95.9%', trend: 'down', color: 'green' },
            { value: '95.7%', trend: 'down', color: 'green' },
            { value: '96.1%', trend: 'up', color: 'green' },
            { value: '96.2%', trend: 'up', color: 'green' },
            { value: '94.8%', trend: 'down', color: 'green' },
          ],
        },
        {
          name: 'LTZ',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '96.1%', trend: null, color: 'green' },
            { value: '96.4%', trend: 'up', color: 'green' },
            { value: '96.7%', trend: 'up', color: 'green' },
            { value: '96.4%', trend: 'down', color: 'green' },
            { value: '96.4%', trend: 'up', color: 'green' },
            { value: '96.7%', trend: 'up', color: 'green' },
          ],
        },
      ],
    },
    {
      name: 'V54',
      sites: [
        {
          name: 'BCD',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '94.9%', trend: null, color: 'green' },
            { value: '94.9%', trend: 'up', color: 'green' },
            { value: '95.3%', trend: 'up', color: 'green' },
            { value: '94.4%', trend: 'down', color: 'orange' },
            { value: '92.4%', trend: 'down', color: 'orange' },
            { value: '89.2%', trend: 'down', color: 'orange' },
          ],
        },
        {
          name: 'FEZ',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '98.4%', trend: null, color: 'green' },
            { value: '97.2%', trend: 'down', color: 'green' },
            { value: '97.4%', trend: 'up', color: 'green' },
            { value: '97.9%', trend: 'up', color: 'green' },
            { value: '97.4%', trend: 'down', color: 'green' },
            { value: '95.8%', trend: 'down', color: 'green' },
          ],
        },
        {
          name: 'FGL',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '97.5%', trend: null, color: 'green' },
            { value: '97.3%', trend: 'down', color: 'green' },
            { value: '94.2%', trend: 'down', color: 'orange' },
            { value: '94.9%', trend: 'up', color: 'green' },
            { value: '95.7%', trend: 'up', color: 'green' },
            { value: '96.4%', trend: 'up', color: 'green' },
          ],
        },
        {
          name: 'FTY',
          weeklyTarget: '94.7%',
          dailyData: [
            { value: '96.2%', trend: null, color: 'green' },
            { value: '93.6%', trend: 'down', color: 'orange' },
            { value: '94.5%', trend: 'up', color: 'orange' },
            { value: '92.9%', trend: 'down', color: 'orange' },
            { value: '93.8%', trend: 'up', color: 'orange' },
            { value: '93.3%', trend: 'down', color: 'orange' },
          ],
        },
      ],
    },
    {
      name: 'V57',
      sites: [
        {
          name: 'LTZ',
          weeklyTarget: '97.3%',
          dailyData: [
            { value: '98.1%', trend: null, color: 'green' },
            { value: '98.1%', trend: 'up', color: 'green' },
            { value: '98.1%', trend: 'down', color: 'green' },
            { value: '98.1%', trend: 'up', color: 'green' },
            { value: '98.1%', trend: 'up', color: 'green' },
            { value: '98.2%', trend: 'up', color: 'green' },
          ],
        },
        {
          name: 'MKD',
          weeklyTarget: '97.3%',
          dailyData: [
            { value: '89.0%', trend: null, color: 'orange' },
            { value: '87.5%', trend: 'down', color: 'orange' },
            { value: '91.4%', trend: 'up', color: 'orange' },
            { value: '92.1%', trend: 'up', color: 'orange' },
            { value: '91.3%', trend: 'down', color: 'orange' },
            { value: '89.8%', trend: 'down', color: 'orange' },
          ],
        },
      ],
    },
  ];

  // FPY Table示例数据 - BGA/Chassis
  const bgaChassisDates = ['12/8', '12/9', '12/10', '12/11', '12/12', '12/13'];
  
  const bgaChassisProjects = [
    {
      name: 'V53',
      sites: [
        {
          name: 'FGL',
          weeklyTarget: '99.2%',
          dailyData: [
            { value: '99.4%', trend: null, color: 'green' },
            { value: '99.1%', trend: 'down', color: 'green' },
            { value: '99.4%', trend: 'up', color: 'green' },
            { value: '99.7%', trend: 'up', color: 'green' },
            { value: '99.1%', trend: 'down', color: 'orange' },
            { value: '99.5%', trend: 'up', color: 'green' },
          ],
        },
      ],
    },
    {
      name: 'V54',
      sites: [
        {
          name: 'FGL',
          weeklyTarget: '99.2%',
          dailyData: [
            { value: '99.5%', trend: null, color: 'green' },
            { value: '99.5%', trend: 'down', color: 'green' },
            { value: '99.4%', trend: 'down', color: 'green' },
            { value: '99.6%', trend: 'up', color: 'green' },
            { value: '99.6%', trend: 'up', color: 'green' },
            { value: '99.4%', trend: 'down', color: 'green' },
          ],
        },
        {
          name: 'LRG',
          weeklyTarget: '99.2%',
          dailyData: [
            { value: '99.8%', trend: null, color: 'green' },
            { value: '99.8%', trend: 'down', color: 'green' },
            { value: '99.8%', trend: 'up', color: 'green' },
            { value: '99.9%', trend: 'up', color: 'green' },
            { value: '100.0%', trend: 'up', color: 'green' },
            { value: '100.0%', trend: 'up', color: 'green' },
          ],
        },
      ],
    },
    {
      name: 'V57',
      sites: [
        {
          name: 'FAZ',
          weeklyTarget: '99.3%',
          dailyData: [
            { value: '100.0%', trend: null, color: 'green' },
            { value: '100.0%', trend: 'down', color: 'green' },
            { value: '100.0%', trend: 'down', color: 'green' },
            { value: '100.0%', trend: 'down', color: 'green' },
            { value: '99.9%', trend: 'down', color: 'green' },
            { value: '99.9%', trend: 'down', color: 'green' },
          ],
        },
        {
          name: 'FGL',
          weeklyTarget: '99.3%',
          dailyData: [
            { value: '100.0%', trend: null, color: 'green' },
            { value: '100.0%', trend: 'down', color: 'green' },
            { value: '100.0%', trend: 'up', color: 'green' },
            { value: '99.9%', trend: 'down', color: 'green' },
            { value: '99.9%', trend: 'down', color: 'green' },
            { value: '99.9%', trend: 'down', color: 'green' },
          ],
        },
      ],
    },
  ];


  // Supply Pipeline示例数据
  const supplyPipelineData = [
    {
      id: '1',
      category: 'V53-HSG',
      subcategory: 'IPEG',
      ship: 26554.8,
      shipFormatted: '26.554.8K',
      shipTarget: 28000,
      oqcPack: 28033.4,
      oqcPackFormatted: '28.033.4K',
      oqcPackTarget: 29000,
      oqc: 28334.3,
      oqcFormatted: '28.334.3K',
      oqcTarget: 29500,
      rowSpan: 2,
    },
    {
      id: '2',
      category: 'V53-HSG',
      subcategory: 'Lens',
      ship: 5015.0,
      shipFormatted: '5.015.0K',
      shipTarget: 9500,
      oqcPack: 6349.5,
      oqcPackFormatted: '6.349.5K',
      oqcPackTarget: 6500,
      oqc: 6472.4,
      oqcFormatted: '6.472.4K',
      oqcTarget: 6600,
      rowSpan: 0,
    },
    {
      id: '3',
      category: 'V54-HSG',
      subcategory: 'BYD',
      ship: 19694.7,
      shipFormatted: '19.694.7K',
      shipTarget: 20000,
      oqcPack: 20668.9,
      oqcPackFormatted: '20.668.9K',
      oqcPackTarget: 21000,
      oqc: 21113.7,
      oqcFormatted: '21.113.7K',
      oqcTarget: 21500,
      rowSpan: 2,
    },
    {
      id: '4',
      category: 'V54-HSG',
      subcategory: 'IPEG',
      ship: 24813.4,
      shipFormatted: '24.813.4K',
      shipTarget: 25000,
      oqcPack: 25530.3,
      oqcPackFormatted: '25.530.3K',
      oqcPackTarget: 26000,
      oqc: 25697.2,
      oqcFormatted: '25.697.2K',
      oqcTarget: 26500,
      rowSpan: 0,
    },
    {
      id: '5',
      category: 'D23-MCH',
      subcategory: 'BYD',
      ship: 3239.4,
      shipFormatted: '3.239.4K',
      shipTarget: 3500,
      oqcPack: 3801.6,
      oqcPackFormatted: '3.801.6K',
      oqcPackTarget: 4000,
      oqc: 3846.4,
      oqcFormatted: '3.846.4K',
      oqcTarget: 4200,
      color: '#fac858',
      rowSpan: 2,
    },
    {
      id: '6',
      category: 'D23-MCH',
      subcategory: 'IPEG',
      ship: 3796.4,
      shipFormatted: '3.796.4K',
      shipTarget: 4000,
      oqcPack: 3808.3,
      oqcPackFormatted: '3.808.3K',
      oqcPackTarget: 4300,
      oqc: 3892.4,
      oqcFormatted: '3.892.4K',
      oqcTarget: 4500,
      color: '#fac858',
      rowSpan: 0,
    },
    {
      id: '7',
      category: 'V57-MCH',
      subcategory: 'Null',
      ship: 3010.2,
      shipFormatted: '3.010.2K',
      shipTarget: 3300,
      oqcPack: 3160.9,
      oqcPackFormatted: '3.160.9K',
      oqcPackTarget: 3500,
      oqc: 3192.3,
      oqcFormatted: '3.192.3K',
      oqcTarget: 3800,
      color: '#fac858',
      rowSpan: 2,
    },
    {
      id: '8',
      category: 'V57-MCH',
      subcategory: 'Lens',
      ship: 23715.0,
      shipFormatted: '23.715.0K',
      shipTarget: 25000,
      oqcPack: 24206.8,
      oqcPackFormatted: '24.206.8K',
      oqcPackTarget: 26000,
      oqc: 24382.7,
      oqcFormatted: '24.382.7K',
      oqcTarget: 26500,
      rowSpan: 0,
    },
    {
      id: '9',
      category: 'V53-Chass.',
      subcategory: 'IPEG',
      ship: 17927.0,
      shipFormatted: '17.927.0K',
      shipTarget: 19000,
      oqcPack: 19509.2,
      oqcPackFormatted: '19.509.2K',
      oqcPackTarget: 20000,
      oqc: 19556.5,
      oqcFormatted: '19.556.5K',
      oqcTarget: 20500,
      rowSpan: 2,
    },
    {
      id: '10',
      category: 'V53-Chass.',
      subcategory: 'LY',
      ship: 20460.5,
      shipFormatted: '20.460.5K',
      shipTarget: 22000,
      oqcPack: 12960.6,
      oqcPackFormatted: '12.960.6K',
      oqcPackTarget: 14000,
      oqc: 12960.6,
      oqcFormatted: '12.960.6K',
      oqcTarget: 14500,
      rowSpan: 0,
    },
    {
      id: '11',
      category: 'V54-Chass.',
      subcategory: 'IPEG',
      ship: 21827.0,
      shipFormatted: '21.827.0K',
      shipTarget: 23000,
      oqcPack: 23809.4,
      oqcPackFormatted: '23.809.4K',
      oqcPackTarget: 24000,
      oqc: 23833.9,
      oqcFormatted: '23.833.9K',
      oqcTarget: 24500,
      color: '#fac858',
      rowSpan: 2,
    },
    {
      id: '12',
      category: 'V54-Chass.',
      subcategory: 'RID',
      ship: 20140.4,
      shipFormatted: '20.140.4K',
      shipTarget: 21000,
      oqcPack: 22801.4,
      oqcPackFormatted: '22.801.4K',
      oqcPackTarget: 23000,
      oqc: 22824.7,
      oqcFormatted: '22.824.7K',
      oqcTarget: 23500,
      rowSpan: 0,
    },
    {
      id: '13',
      category: 'D23-BGA',
      subcategory: 'IPEG',
      ship: 3041.2,
      shipFormatted: '3.041.2K',
      shipTarget: 3300,
      oqcPack: 4975.5,
      oqcPackFormatted: '4.975.5K',
      oqcPackTarget: 5000,
      oqc: 5003.4,
      oqcFormatted: '5.003.4K',
      oqcTarget: 5200,
      rowSpan: 2,
    },
    {
      id: '14',
      category: 'D23-BGA',
      subcategory: 'RID',
      ship: 3626.2,
      shipFormatted: '3.626.2K',
      shipTarget: 4000,
      oqcPack: 5126.3,
      oqcPackFormatted: '5.126.3K',
      oqcPackTarget: 5500,
      oqc: 5130.4,
      oqcFormatted: '5.130.4K',
      oqcTarget: 5700,
      rowSpan: 0,
    },
    {
      id: '15',
      category: 'V57-BGA',
      subcategory: 'IPEG',
      ship: 25933.2,
      shipFormatted: '25.933.2K',
      shipTarget: 27000,
      oqcPack: 27658.2,
      oqcPackFormatted: '27.658.2K',
      oqcPackTarget: 28000,
      oqc: 27891.9,
      oqcFormatted: '27.891.9K',
      oqcTarget: 29000,
      rowSpan: 1,
    }
  ];

  return (
    <div className="flex h-screen">
      {/* 左侧导航 */}
      <SideNav />
      {/* 主内容区 */}
      <div className="flex-1 p-6 overflow-auto">
        
        <h1 className="text-2xl font-bold mb-6">Web Design Draft</h1>
        <div className=" w-[900px] flex justify-between">
          {/* Yield Ant Design Table示例 */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">
              Yield Cum (FPY) - Ant Design Table
            </h2>
            <YieldAntTable
              title="Yield Cum"
              subtitle="(FPY)"
              columns={yieldColumns}
              rows={yieldRows}
              titleColor="#333333"
              backgroundColor="rgb(225,247,238)"
              width={400}
              height={400}
            />
          </div>

          {/* Unknown Table示例 */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-2">
              Unknown Table Example
            </h2>
            <UnknownTable
              title="Unknown"
              columnGroups={[
                { title: "MCH/HSG", subColumns: ["Unknow", "WIP"] },
                { title: "BAG/Chassis", subColumns: ["Unknown", "WIP"] },
              ]}
              rows={[
                {
                  name: "V53",
                  values: [
                    { value: "2.9%" },
                    { value: "8.3%" },
                    { value: "0.8%" },
                    { value: "5.6%" },
                  ],
                },
                {
                  name: "V54",
                  values: [
                    { value: "2.4%" },
                    { value: "7.8%" },
                    { value: "0.6%" },
                    { value: "4.8%" },
                  ],
                },
                {
                  name: "D23",
                  values: [
                    { value: "16.1%" },
                    { value: "0.2%" },
                    { value: "0.2%" },
                    { value: "0.0%" },
                  ],
                },
                {
                  name: "V57",
                  values: [
                    { value: "0.8%" },
                    { value: "7.2%" },
                    { value: "0.0%" },
                    { value: "0.6%" },
                  ],
                },
              ]}
              backgroundColor="#E3F2FD"
              titleColor="#333333"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Supply Pipeline</h2>
          <SupplyPipeline data={supplyPipelineData} title="Supply Pipeline" />
        </div>
        {/* FPY Table示例 */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">FPY - Ant Design Table</h2>
          <div className="mb-8">
            <FPYTable title="MCH/HSG" projects={mchHsgProjects} dates={mchHsgDates} />
          </div>
          <div>
            <FPYTable title="BGA/Chassis" projects={bgaChassisProjects} dates={bgaChassisDates} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

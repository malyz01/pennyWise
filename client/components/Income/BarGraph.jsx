import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  Legend
} from 'recharts'

export default class BarGraph extends React.Component {
 renderLegend = () => {
   return <div style={{ padding: '1rem, 0, .5rem', textAlign: 'center', fontSize: '20px', fontWeight: '600' }}>Weekly</div>
 }

 render () {
   return (
     <div style={{ display: 'flex', justifyContent: 'center' }}>
       <div style={{ background: '#dedede', padding: '2rem' }}>
         <BarChart
           layout="vertical"
           width={1070}
           height={400}
           data={this.props.data}
           margin={{
             top: 5,
             right: 30,
             left: 20,
             bottom: 5
           }}
         >
           <XAxis type="number" />
           <YAxis dataKey="name" type="category" />
           <Tooltip />
           <Legend content={this.renderLegend} />
           <CartesianGrid strokeDasharray="3 3" />
           <Bar
             legendType="none"
             dataKey="Income"
             barSize={50}
             fill="#8884d8"
             background={{ fill: '#eee' }}
           >
             <LabelList
               fill="#eee"
               dataKey="Income"
               formatter={(val) => `$ ${val.toFixed(0)}`}
             />
           </Bar>
         </BarChart>
       </div>
     </div>
   )
 }
}

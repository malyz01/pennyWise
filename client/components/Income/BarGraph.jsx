import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

export default class BarGraph extends React.Component {
  render () {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#dedede', padding: '2rem' }}>
          <BarChart
            width={500}
            height={300}
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="Income"
              fill="#8884d8"
              background={{ fill: '#eee' }}
            />
          </BarChart>
        </div>
      </div>
    )
  }
}

import React from 'react'
import { Container} from 'semantic-ui-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import './bargraph.css'

class BarGraph extends React.Component {
  renderLegend = () => {
    return <div className="barGraphLegend">Weekly</div>
  }

  render () {
    const { data, dKey } = this.props
    return (
      <Container className="barGraphContainer">
        <ResponsiveContainer>
          <BarChart
            layout="vertical"
            data={data}
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
              dataKey={dKey}
              barSize={50}
              fill="#8884d8"
              background={{ fill: '#eee' }}
            >
              <LabelList
                fill="#eee"
                dataKey={dKey}
                formatter={(val) => `$ ${Math.ceil(val)}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Container>
    )
  }
}

export default BarGraph

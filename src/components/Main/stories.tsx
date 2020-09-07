import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'React Avançado'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'teste',
  description: 'teste'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Default',
  description: 'Default'
}

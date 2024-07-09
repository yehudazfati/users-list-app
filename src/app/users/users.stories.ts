import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {UsersComponent} from './users.component';
import {UsersService} from "./users.service";
import {UsersStorybookService} from "./users-storybook.service";

//👇 This default export determines where your story goes in the story list
const meta: Meta<UsersComponent> = {
  component: UsersComponent,
};

export default meta;
type Story = StoryObj<UsersComponent>;

export const UsersStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },

  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: UsersService,
          useClass: UsersStorybookService
        }
      ],
    }),
    // componentWrapperDecorator(Parent),
  ],
};

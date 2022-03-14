import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './components/Counter';
configure({ adapter: new Adapter() });

describe("Counter title testing", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  })

  test('render the team name', () => {
    expect(wrapper.find("h1").text()).toContain("Remote Coder Unity")
  })

  test('renders learn react link', () => {

    expect(wrapper.find("h2").text()).toContain("Dena Powna")

  });

  test("renders a button with text `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  });

  test("renders a initial value of state in div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("100");
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("200");
  });
  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe('100');
  });
});

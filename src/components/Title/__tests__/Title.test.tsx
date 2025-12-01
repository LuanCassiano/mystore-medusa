import React from 'react';
import { render } from '@testing-library/react-native';
import Title from '../Title';
import { Colors } from '../../../global/Colors';
import { Fonts } from '../../../global/Fonts';

describe('Title component', () => {
  it('snapshot', () => {
    const tree = render(<Title font='System' textColor={Colors.BLACK} textSize={10} title='Snapshot'/>)

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render with custom props', () => {
    const customProps = {
      textColor: Colors.PRIMARY,
      textSize: 20,
      font: Fonts.bold,
      title: 'Custom Title',
    }

    const { getByTestId } = render(<Title {...customProps} />);
    const titleElement = getByTestId('title-component');

    expect(titleElement.props.style).toMatchObject({
      color: customProps.textColor,
      fontSize: customProps.textSize,
      fontFamily: customProps.font,
    });
    expect(titleElement.props.children).toBe(customProps.title);
  })
})

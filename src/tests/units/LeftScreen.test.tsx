import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LeftScreen } from '../../components/LeftScreen/LeftScreen';

jest.mock('../../components/LeftScreen/LeftScreen.module.scss', () => ({
  leftScreen: 'leftScreenMock',
}));

describe('LeftScreen', () => {
  it('renders correctly with name and image', () => {
    const name = 'pikachu';
    const image = 'src/logo.svg';

    const { container, getByAltText, getByText } = render(
      <LeftScreen name={name} image={image} />
);

    const imgElement = getByAltText(name);
    const h1Element = getByText(name);

    expect(container.querySelector('.leftScreenMock')).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', image);
    expect(h1Element).toBeInTheDocument();
  });

  it('does not render image if image prop is not provided', () => {
    const name = 'bulbasaur';

    const { container, queryByAltText } = render(
      <LeftScreen name={name} image={undefined} />
    );

    expect(container.querySelector('.leftScreenMock')).toBeInTheDocument();
    expect(queryByAltText(name)).toBeNull();
  });

  it('does not render name if name prop is not provided', () => {
    const image = 'src/logo.svg';

    const { container, queryByText } = render(
      <LeftScreen name={undefined} image={image} />
    );

    expect(container.querySelector('.leftScreenMock')).toBeInTheDocument();
    expect(queryByText(/.+/)).toBeNull();
  });
});
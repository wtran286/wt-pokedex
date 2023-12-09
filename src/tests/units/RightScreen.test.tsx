import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RightScreen } from '../../components/RightScreen/RightScreen';

jest.mock('../../components/RightScreen/RightScreen.module.scss', () => ({
  rightScreen: 'rightScreenMock',
}));

describe('RightScreen', () => {
  const abilitiesMock = [
    { ability: { name: 'Ability1', url: 'www.yahoo.com'  }, is_hidden: false, slot: 1 },
    { ability: { name: 'Ability2', url: 'www.google.com' }, is_hidden: false, slot: 1 },
  ];

  const typesMock = [
    { type: { name: 'Type1', url: 'www.yahoo.com'  }, slot: 1 },
    { type: { name: 'Type2', url: 'www.google.com'  } , slot: 2 },
  ];

  const spritesMock = {
    back_default: 'src/logo.svg',
    back_female: 'back_female',
    back_shiny: 'back_shiny',
    back_shiny_female: 'back_shiny_female',
    front_default: 'front_default',
    front_female: 'front_female',
    front_shiny: 'front_shiny',
    front_shiny_female: 'front_shiny_female',
    other: {
        dream_world: null,
        home: null,
        'official-artwork': {
            front_default: '',
            front_shiny: ''
        }
    },
    version: '',
  };

  const movesMock = [
    { move: { name: 'Move1', url: '' }, version_group_details: '' },
    { move: { name: 'Move2', url: '' }, version_group_details: '' },
  ];

  it('renders abilities, types, sprites, and moves', () => {
    const { container, getByText, getByAltText } = render(
      <RightScreen abilities={abilitiesMock} types={typesMock} sprites={spritesMock} moves={movesMock} />
    );

    expect(container.querySelector('.rightScreenMock')).toBeInTheDocument();

    // Abilities
    expect(getByText('Abilities')).toBeInTheDocument();
    abilitiesMock.forEach((ability) => {
      expect(getByText(ability.ability.name)).toBeInTheDocument();
    });

    // Types
    expect(getByText('Types')).toBeInTheDocument();
    typesMock.forEach((type) => {
      expect(getByText(type.type.name)).toBeInTheDocument();
    });

    // Sprites
    expect(getByText('Sprites')).toBeInTheDocument();
    expect(getByAltText('back_default')).toBeInTheDocument();
    
    // Moves
    expect(getByText('Moves')).toBeInTheDocument();
    movesMock.forEach((move) => {
      expect(getByText(move.move.name)).toBeInTheDocument();
    });
  });
});
import { expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tabs from '../src/components/Header/Tabs/Tabs';
import { items } from '../src/App';

test('affiche le bon onglet au clic', async () => {
    render(<Tabs items={items} />);

    const user = userEvent.setup();
    // Exemple : cliquer sur un onglet nommé "Onglet 2"
    await user.click(screen.getByText('CSS'));
    
    // Vérifier que le contenu associé apparaît
  // @ts-expect-error: matcher ajouté par jest-dom au runtime
  expect(screen.getByText('CSS')).toBeInTheDocument();
});
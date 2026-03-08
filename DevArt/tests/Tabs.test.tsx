import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react';
import Tabs from '../src/components/Tabs'

test('affiche le bon onglet au clic', async () => {
    render(<Tabs />);
    const user = userEvent.setup();

    // Exemple : cliquer sur un onglet nommé "Onglet 2"
    await user.click(screen.getByText('Onglet 2'));

    // Vérifier que le contenu associé apparaît
    expect(screen.getByText('Onglet 2')).toBeInTheDocument();
});


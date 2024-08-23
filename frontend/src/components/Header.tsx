export default ({ activeNav = false }) => {
    const isNavActivated = () => {
        if (activeNav) {
            return (
                <header className="header">
                    <h1>Percepção Musical App With Navigation</h1>
                </header>
            );
        } else {
            return (
                <header className="header">
                    <h1>Percepção Musical App</h1>
                </header>
            );
        }
    };

    return isNavActivated();
};

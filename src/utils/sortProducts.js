

export const sortProducts = () => {

    const alphabeticOrderAZ = (products) => {
        return products.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    };

    const alphabeticOrderZA = (products) => {
        return products.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            }
            if (a.name > b.name) {
                return -1;
            }
            return 0;
        });
    };


    return {
        alphabeticOrderAZ,
        alphabeticOrderZA
    }
}

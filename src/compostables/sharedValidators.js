export const colorValid = function (color) {
        return [
            'darkest',
            'darker',
            'dark',
            'white',
            'light-white',
            'primary',
            'secondary',
            'tertiary',
            'accent-1',
            'accent-2',
            'accent-3',
            'success',
            'warn',
            'danger',
        ].includes(color)
}
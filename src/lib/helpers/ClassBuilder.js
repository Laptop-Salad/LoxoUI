export default class ClassBuilder {
    /**
     * @param {string} size
     * @returns {ClassBuilder}
     */
    setSize(size) {
        this.size = size;

        return this;
    }

    /**
     * @param {string} colour
     * @returns {ClassBuilder}
     */
    setTextColour(colour) {
        this.textColour = colour;

        return this;
    }

    /**
     * @param {string} colour
     * @returns {ClassBuilder}
     */
    setBgColour(colour) {
        this.bgColour = colour;

        return this;
    }

    /**
     * @param {string} colour
     * @returns {ClassBuilder}
     */
    setBorderColour(colour) {
        this.borderColour = colour;

        return this;
    }

    /**
     *
     * @param {boolean} inverse
     * @returns {ClassBuilder}
     */
    setInverse(inverse) {
        this.inverse = inverse;

        return this;
    }

    /**
     * @param {string} classProp
     */
    setClassProp(classProp) {
        this.classProp = classProp;

        return this;
    }

    buildSize() {
        switch (this.size) {
            case 'sm': return 'p-2 text-sm';
            case 'lg': return 'p-4 text-lg';
            case 'xl': return 'p-5 text-xl';
            case 'base': return '';
            default: throw new Error(`Size ${this.size} is not a valid size. Must be 'sm', 'lg', 'xl', 'base'`);
        }
    }

    buildTextBgColour() {
        if (this.inverse) {
            return this.textColour + '-text-inverse ' + this.bgColour + '-bg';
        }

       return this.textColour + '-text ' + this.bgColour + '-bg-inverse';
    }

    buildTextBgBorderColour() {
        console.log('hello');
        if (this.inverse) {
            return this.textColour + '-text-inverse border ' + this.borderColour + '-border-inverse ' + this.bgColour + '-bg';
        }

        return this.textColour + '-text border ' + this.borderColour + '-border ' + this.bgColour + '-bg-inverse';
    }

    buildTextColour() {
        if (this.inverse) {
            return this.textColour + '-text-inverse';
        }

        return this.textColour + '-text';
    }

    buildBgColour() {
        if (this.inverse) {
            return this.bgColour + '-bg-inverse';
        }

        return this.bgColour + '-bg';
    }

    buildBorderColour() {
        if (this.inverse) {
            return this.borderColour + '-border-inverse';
        }

        return this.borderColour + '-border';
    }


    static new() { return new ClassBuilder(); }

    getClasses() {
        let classes = [];

        // handle size
        if (this.size !== undefined) { classes.push(this.buildSize()); }

        // handle colours
        if (this.bgColour !== undefined && this.textColour !== undefined && this.borderColour !== undefined) {
            classes.push(this.buildTextBgBorderColour());
        } else if (this.bgColour !== undefined && this.textColour !== undefined) {
            classes.push(this.buildTextBgColour());
        } else {
            if (this.bgColour !== undefined) {
                classes.push(this.buildBgColour());
            }

            if (this.textColour !== undefined) {
                classes.push(this.buildTextColour());
            }

            if (this.borderColour !== undefined) {
                classes.push(this.buildBorderColour());
            }
        }

        classes.push(this.classProp);

        return classes.join(" ")
    }
}
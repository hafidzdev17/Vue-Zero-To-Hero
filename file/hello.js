export const Hello = {
    template: `
    <p>
    State counter pada hello :
    {{ counter }}
    </p>
    `,
    computed: {
        counter () {
            return this.$store.state.counter
        }
    }
}
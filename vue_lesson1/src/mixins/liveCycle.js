export let liveCycle = {
    created() {
        console.log("component created " + this.name)
    },
    mounted() {
        console.log("component mounted " + this.name)
    },
    updated() {
        console.log("component updated " + this.name)
    }
}
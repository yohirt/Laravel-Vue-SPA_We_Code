export default{
    state: {
        WelcomeMessage: "Witamy w Vue",
    },
    getters: {
        welcome(state){
            return state.WelcomeMessage;
        }
    },
    mutations: {},
    actions: {},
}
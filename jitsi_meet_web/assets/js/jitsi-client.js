class JitsiMeetAPI {
    
    constructor({domain , options}) {
        this.domain = domain;
        this.options = options;
        console.log(options);
        this.api = JitsiMeetExternalAPI(domain, options);
    }

    on(event, callback) {
        this.api.on(event, callback);
    }

    executeCommand(command, arguments){
        this.api.executeCommand(command, arguments);
    }

    addEventListener(eventName, callback) {
        this.api.addEventListener(eventName, callback);
    }
}
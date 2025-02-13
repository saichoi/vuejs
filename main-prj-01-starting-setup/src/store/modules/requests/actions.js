export default {
    async contactCoach(context, paylaod) {
        const newRequest = {
            userEmail: paylaod.email,
            message: paylaod.message
        }

        const response = await fetch(`https://vue-http-demo-1181f-default-rtdb.firebaseio.com/requests/${paylaod.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData =  await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request.')
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = paylaod.coachId; // 서버에는 전송되지 않고 로컬데이터로 저장

        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId; // store/index.js에 있는 userId를 가져온다.
        const response = await fetch(`https://vue-http-demo-1181f-default-rtdb.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.')
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };
            requests.push(request);
        }

        context.commit('setRequests', requests);
    }
}
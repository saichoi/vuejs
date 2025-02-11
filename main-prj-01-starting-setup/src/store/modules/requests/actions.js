export default {
    contactCoach(context, paylaod) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: paylaod.coachId,
            userEmail: paylaod.email,
            message: paylaod.message
        }
        context.commit('addRequest', newRequest);
    }
}
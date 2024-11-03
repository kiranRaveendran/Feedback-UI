const feedbackButtons = document.querySelectorAll('.feedback-btn');
const sendFeedbackBtn = document.getElementById('sendFeedbackBtn');
const thankYouMessage = document.getElementById('thankYouMessage');
const feedbackText = document.getElementById('feedbackText');
const child_div=document.querySelector('.child')
let selectedFeedback = '';

feedbackButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedFeedback = button.getAttribute('data-feedback');
        sendFeedbackBtn.disabled = false; // Enable send feedback button
        feedbackButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

sendFeedbackBtn.addEventListener('click', () => {
    feedbackText.textContent = selectedFeedback;
    thankYouMessage.style.display = 'block'; // Show thank-you message
    child_div.remove()
});

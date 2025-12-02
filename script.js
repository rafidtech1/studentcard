// টেক্সট আপডেট ফাংশন
function updateCard() {
    const name = document.getElementById('inName').value;
    const id = document.getElementById('inID').value;
    const session = document.getElementById('inSession').value;
    const level = document.getElementById('inLevel').value;
    const batch = document.getElementById('inBatch').value;
    const group = document.getElementById('inGroup').value;

    document.getElementById('outName').innerText = name ? name : "Student Name";
    document.getElementById('outID').innerText = id ? id : "123456";
    document.getElementById('outSession').innerText = session ? session : "2024-2025";
    document.getElementById('outLevel').innerText = level;
    document.getElementById('outBatch').innerText = batch ? batch : "29";
    document.getElementById('outGroup').innerText = group ? group : "Science";
}

// শুধুমাত্র নাম্বার চেক করার ফাংশন (ID এবং Batch এর জন্য)
function validateNumber(input, errorId) {
    // যদি 0-9 ছাড়া অন্য কিছু থাকে
    const regex = /[^0-9]/g; 
    
    if (regex.test(input.value)) {
        // এরর মেসেজ দেখাবে
        document.getElementById(errorId).style.display = 'block';
        // ভুল অক্ষরটি মুছে দিবে
        input.value = input.value.replace(regex, '');
    } else {
        // সব ঠিক থাকলে এরর লুকাবে
        document.getElementById(errorId).style.display = 'none';
    }
    // কার্ড আপডেট করবে
    updateCard();
}

// সেশন চেক করার ফাংশন (নাম্বার এবং হাইফেন - এর জন্য)
function validateSession(input, errorId) {
    // যদি 0-9 এবং হাইফেন (-) ছাড়া অন্য কিছু থাকে
    const regex = /[^0-9-]/g; 

    if (regex.test(input.value)) {
        document.getElementById(errorId).style.display = 'block';
        input.value = input.value.replace(regex, '');
    } else {
        document.getElementById(errorId).style.display = 'none';
    }
    updateCard();
}

// ছবি আপলোড ফাংশন
function loadPhoto(event) {
    const image = document.getElementById('previewPhoto');
    if(event.target.files[0]){
        image.src = URL.createObjectURL(event.target.files[0]);
    }
}

// কার্ড ডাউনলোড ফাংশন
function downloadCardImage() {
    const cardElement = document.getElementById("cardCapture");
    
    html2canvas(cardElement, { 
        scale: 3, 
        useCORS: true, 
        backgroundColor: "#ffffff" 
    }).then(canvas => {
        const link = document.createElement("a");
        link.document = document;
        link.download = "Student_ID_Card.png"; 
        link.href = canvas.toDataURL("image/png"); 
        link.click(); 
    });
}
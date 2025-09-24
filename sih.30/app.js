// Telemedicine Application JavaScript - Complete Version

// Application data
const appData = {
    doctors: [
        {
            id: 1,
            name: "Dr. Rajesh Kumar",
            specialization: "General Medicine",
            experience: 15,
            languages: ["Hindi", "English"],
            availability: "9 AM - 5 PM",
            rating: 4.8
        },
        {
            id: 2,
            name: "Dr. Priya Sharma",
            specialization: "Pediatrics",
            experience: 12,
            languages: ["Hindi", "English"],
            availability: "10 AM - 6 PM",
            rating: 4.9
        },
        {
            id: 3,
            name: "Dr. Harpreet Singh",
            specialization: "Cardiology",
            experience: 20,
            languages: ["Hindi", "English", "Kannada"],
            availability: "2 PM - 8 PM",
            rating: 4.7
        }
    ],
    pharmacies: [
        {
            id: 1,
            name: "Nabha Medical Store",
            location: "Main Market, Nabha",
            distance: "2.5 km",
            contact: "+91 9876543210",
            medicines: [
                { name: "Paracetamol 500mg", availability: "Available", price: 25 },
                { name: "Amoxicillin 250mg", availability: "Low Stock", price: 85 },
                { name: "Metformin 500mg", availability: "Out of Stock", price: 45 }
            ]
        },
        {
            id: 2,
            name: "Village Health Pharmacy",
            location: "Ghanaur Road, Nabha",
            distance: "4.2 km",
            contact: "+91 9876543211",
            medicines: [
                { name: "Paracetamol 500mg", availability: "Available", price: 28 },
                { name: "Amoxicillin 250mg", availability: "Available", price: 82 },
                { name: "Metformin 500mg", availability: "Available", price: 48 }
            ]
        }
    ],
    villages: ["Ghanaur", "Amloh", "Bhadson", "Lalton", "Machhiwara", "Samrala", "Khanna", "Doraha", "Sirhind", "Rajpura"],
    symptoms: [
        {
            category: "fever",
            symptoms: ["High temperature", "Chills", "Body ache", "Headache"],
            recommendations: "Rest, hydration, consult doctor if persists >3 days"
        },
        {
            category: "digestive",
            symptoms: ["Stomach pain", "Nausea", "Vomiting", "Diarrhea"],
            recommendations: "Light food, ORS, medical consultation recommended"
        },
        {
            category: "respiratory",
            symptoms: ["Cough", "Cold", "Breathing difficulty", "Chest pain"],
            recommendations: "Steam inhalation, rest, immediate medical attention for breathing issues"
        }
    ],
    appointments: [
        {
            id: 1,
            doctor: "Dr. Rajesh Kumar",
            date: "2025-09-15",
            time: "10:30 AM",
            status: "Confirmed",
            type: "Video Consultation"
        },
        {
            id: 2,
            doctor: "Dr. Priya Sharma",
            date: "2025-09-20",
            time: "3:00 PM",
            status: "Pending",
            type: "Follow-up"
        }
    ],
    healthRecords: [
        {
            date: "2025-09-01",
            type: "Consultation",
            doctor: "Dr. Rajesh Kumar",
            diagnosis: "Seasonal Fever",
            prescription: "Paracetamol 500mg twice daily",
            notes: "Rest for 3 days, return if fever persists"
        },
        {
            date: "2025-08-15",
            type: "Lab Report",
            test: "Blood Sugar Test",
            result: "Normal - 95 mg/dL",
            reference: "70-140 mg/dL"
        }
    ]
};

// Application state
// (Removed redeclaration of currentLanguage, currentUser, selectedDoctor, isLoggedIn as they are already declared above)

// Translations object for English, Hindi, and Kannada
const translations = {
    en: {
        pageTitle: 'HealthConnect - Rural Telemedicine Platform',
        offlineIndicator: 'You are offline. Some features are unavailable.',
        logo: '🏥 HealthConnect',
        home: 'Home',
        dashboard: 'Dashboard',
        bookConsultation: 'Book Consultation',
        healthRecords: 'Health Records',
        pharmacyLocator: 'Pharmacy Locator',
        aiSymptomChecker: 'AI Symptom Checker',
        about: 'About',
        login: 'Login',
        emergency: '🚨 Emergency',
        heroHeading: 'Telemedicine Access for Rural Healthcare in Nabha',
        heroSubheading: "Easy video consultations, digital health records, pharmacy finder, and AI symptom checker for Punjab's villages.",
        villagesServed: 'Villages Served',
        availability: 'Availability',
        doctorsAvailable: 'Doctors Available',
        getStarted: 'Get Started',
        ourServices: 'Our Services',
        videoConsultations: 'Video Consultations',
        videoConsultationsDesc: 'Book appointments with qualified doctors via video call',
        digitalHealthRecords: 'Digital Health Records',
        digitalHealthRecordsDesc: 'Access your medical history anytime, anywhere',
        pharmacyLocator: 'Pharmacy Locator',
        pharmacyLocatorDesc: 'Find nearby pharmacies and check medicine availability',
        aiSymptomChecker: 'AI Symptom Checker',
        aiSymptomCheckerDesc: 'Get preliminary health assessment using AI',
        patientDashboard: 'Patient Dashboard',
        patientInfo: 'Patient Information',
        name: 'Name:',
        age: 'Age:',
        village: 'Village:',
        bloodGroup: 'Blood Group:',
        upcomingAppointments: 'Upcoming Appointments',
        date: 'Date:',
        time: 'Time:',
        status: 'Status:',
        confirmed: 'Confirmed',
        pending: 'Pending',
        recentRecords: 'Recent Records',
        consultation: 'Consultation',
        seasonalFever: 'Seasonal Fever: Paracetamol 500mg twice daily',
        quickActions: 'Quick Actions',
        bookConsultationBtn: 'Book Consultation',
        viewRecordsBtn: 'View Records',
        findPharmacyBtn: 'Find Pharmacy',
        bookConsultationHeading: 'Book a Consultation',
        selectDoctor: 'Select a Doctor',
        appointmentDetails: 'Appointment Details',
        selectedDoctorLabel: 'Selected Doctor',
        selectDoctorPlaceholder: 'Select a doctor first',
        dateLabel: 'Date',
        timeLabel: 'Time',
        selectTime: 'Select Time',
        time9am: '09:00 AM',
        time10am: '10:00 AM',
        time11am: '11:00 AM',
        time2pm: '02:00 PM',
        time3pm: '03:00 PM',
        time4pm: '04:00 PM',
        symptomsLabel: 'Symptoms/Reason for Visit',
        symptomsPlaceholder: 'Describe your symptoms or reason for consultation',
        consultationTypeLabel: 'Consultation Type',
        videoCall: 'Video Call',
        audioOnly: 'Audio Only',
        bookAppointmentBtn: 'Book Appointment',
        healthRecordsHeading: 'Your Health Records',
        timeline: 'Timeline',
        prescriptions: 'Prescriptions',
        labReports: 'Lab Reports',
        prescriptionHistoryPlaceholder: 'Your prescription history will appear here.',
        labReportsPlaceholder: 'Your lab reports will appear here.',
        pharmacyLocatorHeading: 'Pharmacy Locator',
        searchMedicinePlaceholder: 'Search for medicines...',
        searchBtn: 'Search',
        aiSymptomCheckerHeading: 'AI Symptom Checker',
        disclaimer: '⚠️ This tool provides preliminary guidance only. For serious symptoms, consult a doctor immediately.',
        symptomCategoryLabel: 'What type of symptoms are you experiencing?',
        selectCategory: 'Select a category',
        feverCategory: 'Fever & General',
        digestiveCategory: 'Digestive Issues',
        respiratoryCategory: 'Respiratory Problems',
        specificSymptomsLabel: 'Select your specific symptoms:',
        severityLabel: 'How severe are your symptoms?',
        selectSeverity: 'Select severity',
        mild: 'Mild',
        moderate: 'Moderate',
        severe: 'Severe',
        symptomDurationLabel: 'How long have you had these symptoms?',
        selectDuration: 'Select duration',
        lessThanDay: 'Less than a day',
        '1-3Days': '1-3 days',
        '3-7Days': '3-7 days',
        moreThanWeek: 'More than a week',
        additionalNotesLabel: 'Additional notes (optional)',
        additionalNotesPlaceholder: 'Any additional information about your symptoms',
        analyzeSymptomsBtn: 'Analyze Symptoms',
        analysisResults: 'Analysis Results',
        newCheckBtn: 'New Check',
        loginModalHeading: 'Login to HealthConnect',
        mobileNumberLabel: 'Mobile Number',
        mobileNumberPlaceholder: 'Enter your 10-digit mobile number',
        sendOTPBtn: 'Send OTP',
        otpLabel: 'Enter OTP',
        otpPlaceholder: 'Enter 6-digit OTP',
        demoOTPSmall: 'Demo OTP: 123456',
        loginBtn: 'Login',
        emergencyModalHeading: '🚨 Emergency Contacts',
        nationalEmergency: 'National Emergency',
        call108: '📞 Call 108',
        nabhaHospital: 'Nabha Civil Hospital',
        callHospital: '📞 Call Hospital',
        localAmbulance: 'Local Ambulance',
        call102: '📞 Call 102',
        videoConsultationModalHeading: 'Video Consultation',
        videoPlaceholder1: '📹 Video call would appear here',
        videoPlaceholder2: 'Connected with doctor...',
        aiChatbot: 'AI Chatbot',
        chatPlaceholder: 'Type your message...',
        sendBtn: 'Send',
        callBtn: '📞 Call',
        available: 'Available',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        // Additional labels for dynamic content
        experienceLabel: 'Experience:',
        languagesLabel: 'Languages:',
        availableLabel: 'Available:',
        bookingText: 'Booking...',
        selectDoctorAlert: 'Please select a doctor first',
        fillFieldsAlert: 'Please fill in all required fields',
        bookingSuccessAlert: 'Appointment booked successfully!',
        startConsultationConfirm: 'Would you like to start your video consultation now?',
        doctorLabel: 'Doctor:',
        diagnosisLabel: 'Diagnosis:',
        testLabel: 'Test:',
        resultLabel: 'Result:',
        prescriptionLabel: 'Prescription:',
        notesLabel: 'Notes:',
        availableMedicinesHeading: 'Available Medicines:',
        searchingText: 'Searching...',
        noMedicinesFound: 'No medicines found matching your search.',
        analyzingText: 'Analyzing...',
        generalCareRecommended: 'General care recommended',
        immediateMedicalAttention: 'Immediate medical attention required',
        medicalConsultationRecommended: 'Medical consultation recommended',
        difficulty: 'difficulty',
        chestPain: 'chest pain',
        preliminaryAnalysis: 'Preliminary Analysis:',
        priorityLabel: 'Priority:',
        urgent: 'URGENT',
        moderate: 'MODERATE',
        routine: 'ROUTINE',
        symptomsIdentified: 'Symptoms identified:',
        recommendationLabel: 'Recommendation:',
        endCallConfirm: 'Are you sure you want to end the call?'
    },
    hi: {
        pageTitle: 'हेल्थकनेक्ट - ग्रामीण टेलीमेडिसिन प्लेटफॉर्म',
        offlineIndicator: '🔴 आप ऑफ़लाइन हैं। कुछ सुविधाएँ अनुपलब्ध हैं।',
        logo: '🏥 हेल्थकनेक्ट',
        home: 'होम',
        dashboard: 'डैशबोर्ड',
        bookConsultation: 'परामर्श बुक करें',
        healthRecords: 'स्वास्थ्य रिकॉर्ड',
        pharmacyLocator: 'फार्मेसी खोजें',
        aiSymptomChecker: 'एआई लक्षण जांचकर्ता',
        about: 'बारे में',
        login: 'लॉगिन',
        emergency: '🚨 आपातकाल',
        heroHeading: 'नाभा में ग्रामीण स्वास्थ्य सेवा के लिए टेलीमेडिसिन पहुंच',
        getStarted: 'शुरू करें',
        ourServices: 'हमारी सेवाएँ',
        videoConsultations: 'वीडियो परामर्श',
        videoConsultationsDesc: 'वीडियो कॉल के माध्यम से योग्य डॉक्टरों के साथ अपॉइंटमेंट बुक करें',
        digitalHealthRecords: 'डिजिटल स्वास्थ्य रिकॉर्ड',
        digitalHealthRecordsDesc: 'अपने मेडिकल इतिहास को कभी भी, कहीं भी एक्सेस करें',
        pharmacyLocator: 'फार्मेसी खोजें',
        pharmacyLocatorDesc: 'आस-पास की फार्मेसियों को खोजें और दवा की उपलब्धता की जांच करें',
        aiSymptomChecker: 'एआई लक्षण जांचकर्ता',
        aiSymptomCheckerDesc: 'एआई का उपयोग करके प्रारंभिक स्वास्थ्य मूल्यांकन प्राप्त करें',
        patientDashboard: 'रोगी डैशबोर्ड',
        patientInfo: 'रोगी की जानकारी',
        name: 'नाम:',
        age: 'आयु:',
        village: 'गाँव:',
        bloodGroup: 'ब्लड ग्रुप:',
        upcomingAppointments: 'आने वाली अपॉइंटमेंट',
        date: 'दिनांक:',
        time: 'समय:',
        status: 'स्थिति:',
        confirmed: 'पुष्टि',
        pending: 'लंबित',
        recentRecords: 'हाल के रिकॉर्ड',
        consultation: 'परामर्श',
        seasonalFever: 'मौसमी बुखार: पेरासिटामोल 500mg दिन में दो बार',
        quickActions: 'त्वरित कार्य',
        bookConsultationBtn: 'परामर्श बुक करें',
        viewRecordsBtn: 'रिकॉर्ड देखें',
        findPharmacyBtn: 'फार्मेसी खोजें',
        bookConsultationHeading: 'परामर्श बुक करें',
        selectDoctor: 'एक डॉक्टर का चयन करें',
        appointmentDetails: 'अपॉइंटमेंट विवरण',
        selectedDoctorLabel: 'चुना गया डॉक्टर',
        selectDoctorPlaceholder: 'पहले एक डॉक्टर का चयन करें',
        dateLabel: 'दिनांक',
        timeLabel: 'समय',
        selectTime: 'समय चुनें',
        time9am: '09:00 पूर्वाह्न',
        time10am: '10:00 पूर्वाह्न',
        time11am: '11:00 पूर्वाह्न',
        time2pm: '02:00 अपराह्न',
        time3pm: '03:00 अपराह्न',
        time4pm: '04:00 अपराह्न',
        symptomsLabel: 'लक्षण/आगमन का कारण',
        symptomsPlaceholder: 'अपने लक्षण या परामर्श का कारण बताएं',
        consultationTypeLabel: 'परामर्श का प्रकार',
        videoCall: 'वीडियो कॉल',
        audioOnly: 'केवल ऑडियो',
        bookAppointmentBtn: 'अपॉइंटमेंट बुक करें',
        healthRecordsHeading: 'आपके स्वास्थ्य रिकॉर्ड',
        timeline: 'टाइमलाइन',
        prescriptions: 'नुस्खे',
        labReports: 'लैब रिपोर्ट',
        prescriptionHistoryPlaceholder: 'आपके नुस्खे का इतिहास यहाँ दिखाई देगा।',
        labReportsPlaceholder: 'आपकी लैब रिपोर्ट यहाँ दिखाई देंगी।',
        pharmacyLocatorHeading: 'फार्मेसी खोजें',
        searchMedicinePlaceholder: 'दवाओं की खोज करें...',
        searchBtn: 'खोजें',
        aiSymptomCheckerHeading: 'एआई लक्षण जांचकर्ता',
        disclaimer: '⚠️ यह उपकरण केवल प्रारंभिक मार्गदर्शन प्रदान करता है। गंभीर लक्षणों के लिए, तुरंत डॉक्टर से परामर्श लें।',
        symptomCategoryLabel: 'आपको किस प्रकार के लक्षण अनुभव हो रहे हैं?',
        selectCategory: 'एक श्रेणी चुनें',
        feverCategory: 'बुखार और सामान्य',
        digestiveCategory: 'पाचन संबंधी समस्याएं',
        respiratoryCategory: 'श्वसन संबंधी समस्याएं',
        specificSymptomsLabel: 'अपने विशिष्ट लक्षणों का चयन करें:',
        severityLabel: 'आपके लक्षण कितने गंभीर हैं?',
        selectSeverity: 'गंभीरता चुनें',
        mild: 'हल्का',
        moderate: 'मध्यम',
        severe: 'गंभीर',
        symptomDurationLabel: 'आपको ये लक्षण कब से हैं?',
        selectDuration: 'अवधि चुनें',
        lessThanDay: 'एक दिन से कम',
        '1-3Days': '1-3 दिन',
        '3-7Days': '3-7 दिन',
        moreThanWeek: 'एक सप्ताह से अधिक',
        additionalNotesLabel: 'अतिरिक्त नोट्स (वैकल्पिक)',
        additionalNotesPlaceholder: 'अपने लक्षणों के बारे में कोई अतिरिक्त जानकारी',
        analyzeSymptomsBtn: 'लक्षणों का विश्लेषण करें',
        analysisResults: 'विश्लेषण परिणाम',
        newCheckBtn: 'नई जांच',
        loginModalHeading: 'हेल्थकनेक्ट में लॉगिन करें',
        mobileNumberLabel: 'मोबाइल नंबर',
        mobileNumberPlaceholder: 'अपना 10-अंकीय मोबाइल नंबर दर्ज करें',
        sendOTPBtn: 'ओटीपी भेजें',
        otpLabel: 'ओटीपी दर्ज करें',
        otpPlaceholder: '6-अंकीय ओटीपी दर्ज करें',
        demoOTPSmall: 'डेमो ओटीपी: 123456',
        loginBtn: 'लॉगिन करें',
        emergencyModalHeading: '🚨 आपातकालीन संपर्क',
        nationalEmergency: 'राष्ट्रीय आपातकाल',
        call108: '📞 108 पर कॉल करें',
        nabhaHospital: 'नाभा सिविल अस्पताल',
        callHospital: '📞 अस्पताल को कॉल करें',
        localAmbulance: 'स्थानीय एम्बुलेंस',
        call102: '📞 102 पर कॉल करें',
        videoConsultationModalHeading: 'वीडियो परामर्श',
        videoPlaceholder1: '📹 वीडियो कॉल यहाँ दिखाई देगी',
        videoPlaceholder2: 'डॉक्टर से कनेक्ट हो रहा है...',
        aiChatbot: 'एआई चैटबॉट',
        chatPlaceholder: 'अपना संदेश लिखें...',
        sendBtn: 'भेजें',
        callBtn: '📞 कॉल करें',
        available: 'उपलब्ध',
        lowStock: 'कम स्टॉक',
        outOfStock: 'स्टॉक में नहीं',
        experienceLabel: 'अनुभव:',
        languagesLabel: 'भाषाएँ:',
        availableLabel: 'उपलब्ध:',
        bookingText: 'बुकिंग हो रही है...',
        selectDoctorAlert: 'कृपया पहले एक डॉक्टर का चयन करें',
        fillFieldsAlert: 'कृपया सभी आवश्यक फ़ील्ड भरें',
        bookingSuccessAlert: 'अपॉइंटमेंट सफलतापूर्वक बुक हो गई!',
        startConsultationConfirm: 'क्या आप अभी अपना वीडियो परामर्श शुरू करना चाहेंगे?',
        doctorLabel: 'डॉक्टर:',
        diagnosisLabel: 'निदान:',
        testLabel: 'टेस्ट:',
        resultLabel: 'परिणाम:',
        prescriptionLabel: 'नुस्खा:',
        notesLabel: 'नोट्स:',
        availableMedicinesHeading: 'उपलब्ध दवाएँ:',
        searchingText: 'खोज हो रही है...',
        noMedicinesFound: 'आपकी खोज से मेल खाने वाली कोई दवाएँ नहीं मिलीं।',
        analyzingText: 'विश्लेषण हो रहा है...',
        generalCareRecommended: 'सामान्य देखभाल की सलाह दी जाती है',
        immediateMedicalAttention: 'तत्काल चिकित्सा ध्यान देने की आवश्यकता है',
        medicalConsultationRecommended: 'चिकित्सा परामर्श की सलाह दी जाती है',
        difficulty: 'difficulty',
        chestPain: 'chest pain',
        preliminaryAnalysis: 'प्रारंभिक विश्लेषण:',
        priorityLabel: 'प्राथमिकता:',
        urgent: 'अत्यावश्यक',
        moderate: 'मध्यम',
        routine: 'नियमित',
        symptomsIdentified: 'पहचाने गए लक्षण:',
        recommendationLabel: 'सिफारिश:',
        endCallConfirm: 'क्या आप वाकई कॉल समाप्त करना चाहते हैं?'
    },
    kn: {
        pageTitle: 'ಹೆಲ್ತ್‌ಕನೆಕ್ಟ್ - ಗ್ರಾಮೀಣ ಟೆಲಿಮೆಡಿಸಿನ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್',
        offlineIndicator: '🔴 ನೀವು ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿದ್ದೀರಿ. ಕೆಲವು ವೈಶಿಷ್ಟ್ಯಗಳು ಲಭ್ಯವಿಲ್ಲ.',
        logo: '🏥 ಹೆಲ್ತ್‌ಕನೆಕ್ಟ್',
        home: 'ಮುಖಪುಟ',
        dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
        bookConsultation: 'ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ',
        healthRecords: 'ಆರೋಗ್ಯ ದಾಖಲೆಗಳು',
        pharmacyLocator: 'ಫಾರ್ಮಸಿ ಲೊಕೇಟರ್',
        aiSymptomChecker: 'AI ರೋಗಲಕ್ಷಣ ಪರಿಶೀಲಕ',
        about: 'ನಮ್ಮ ಬಗ್ಗೆ',
        login: 'ಲಾಗಿನ್',
        emergency: '🚨 ತುರ್ತು',
        heroHeading: 'ನಭಾ ಗ್ರಾಮೀಣ ಆರೋಗ್ಯ ಸೇವೆಗಾಗಿ ಟೆಲಿಮೆಡಿಸಿನ್ ಪ್ರವೇಶ',
        getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
        ourServices: 'ನಮ್ಮ ಸೇವೆಗಳು',
        videoConsultations: 'ವೀಡಿಯೊ ಸಮಾಲೋಚನೆಗಳು',
        videoConsultationsDesc: 'ಅರ್ಹ ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕರೆಯ ಮೂಲಕ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ',
        digitalHealthRecords: 'ಡಿಜಿಟಲ್ ಆರೋಗ್ಯ ದಾಖಲೆಗಳು',
        digitalHealthRecordsDesc: 'ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ಇತಿಹಾಸವನ್ನು ಯಾವಾಗ ಬೇಕಾದರೂ, ಎಲ್ಲಿ ಬೇಕಾದರೂ ಪ್ರವೇಶಿಸಿ',
        pharmacyLocator: 'ಫಾರ್ಮಸಿ ಲೊಕೇಟರ್',
        pharmacyLocatorDesc: 'ಹತ್ತಿರದ ಫಾರ್ಮಸಿಗಳನ್ನು ಹುಡುಕಿ ಮತ್ತು ಔಷಧಿಯ ಲಭ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ',
        aiSymptomChecker: 'AI ರೋಗಲಕ್ಷಣ ಪರಿಶೀಲಕ',
        aiSymptomCheckerDesc: 'AI ಬಳಸಿ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನ ಪಡೆಯಿರಿ',
        patientDashboard: 'ರೋಗಿಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
        patientInfo: 'ರೋಗಿಯ ಮಾಹಿತಿ',
        name: 'ಹೆಸರು:',
        age: 'ವಯಸ್ಸು:',
        village: 'ಗ್ರಾಮ:',
        bloodGroup: 'ರಕ್ತದ ಗುಂಪು:',
        upcomingAppointments: 'ಮುಂಬರುವ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು',
        date: 'ದಿನಾಂಕ:',
        time: 'ಸಮಯ:',
        status: 'ಸ್ಥಿತಿ:',
        confirmed: 'ದೃಢೀಕರಿಸಲಾಗಿದೆ',
        pending: 'ಬಾಕಿಯಿದೆ',
        recentRecords: 'ಇತ್ತೀಚಿನ ದಾಖಲೆಗಳು',
        consultation: 'ಸಮಾಲೋಚನೆ',
        seasonalFever: 'ಕಾಲೋಚಿತ ಜ್ವರ: ಪ್ಯಾರಾಸಿಟಮಾಲ್ 500mg ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ',
        quickActions: 'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು',
        bookConsultationBtn: 'ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ',
        viewRecordsBtn: 'ದಾಖಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
        findPharmacyBtn: 'ಫಾರ್ಮಸಿ ಹುಡುಕಿ',
        bookConsultationHeading: 'ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ',
        selectDoctor: 'ವೈದ್ಯರನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        appointmentDetails: 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ವಿವರಗಳು',
        selectedDoctorLabel: 'ಆಯ್ಕೆಮಾಡಿದ ವೈದ್ಯರು',
        selectDoctorPlaceholder: 'ಮೊದಲು ವೈದ್ಯರನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        dateLabel: 'ದಿನಾಂಕ',
        timeLabel: 'ಸಮಯ',
        selectTime: 'ಸಮಯ ಆಯ್ಕೆಮಾಡಿ',
        time9am: '09:00 AM',
        time10am: '10:00 AM',
        time11am: '11:00 AM',
        time2pm: '02:00 PM',
        time3pm: '03:00 PM',
        time4pm: '04:00 PM',
        symptomsLabel: 'ರೋಗಲಕ್ಷಣಗಳು/ ಭೇಟಿಯ ಕಾರಣ',
        symptomsPlaceholder: 'ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳು ಅಥವಾ ಸಮಾಲೋಚನೆಯ ಕಾರಣವನ್ನು ವಿವರಿಸಿ',
        consultationTypeLabel: 'ಸಮಾಲೋಚನೆಯ ಪ್ರಕಾರ',
        videoCall: 'ವೀಡಿಯೊ ಕರೆ',
        audioOnly: 'ಆಡಿಯೊ ಮಾತ್ರ',
        bookAppointmentBtn: 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ',
        healthRecordsHeading: 'ನಿಮ್ಮ ಆರೋಗ್ಯ ದಾಖಲೆಗಳು',
        timeline: 'ಟೈಮ್‌ಲೈನ್',
        prescriptions: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ಗಳು',
        labReports: 'ಲ್ಯಾಬ್ ವರದಿಗಳು',
        prescriptionHistoryPlaceholder: 'ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಇತಿಹಾಸ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.',
        labReportsPlaceholder: 'ನಿಮ್ಮ ಲ್ಯಾಬ್ ವರದಿಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.',
        pharmacyLocatorHeading: 'ಫಾರ್ಮಸಿ ಲೊಕೇಟರ್',
        searchMedicinePlaceholder: 'ಔಷಧಿಗಳಿಗಾಗಿ ಹುಡುಕಿ...',
        searchBtn: 'ಹುಡುಕಿ',
        aiSymptomCheckerHeading: 'AI ರೋಗಲಕ್ಷಣ ಪರಿಶೀಲಕ',
        disclaimer: '⚠️ ಈ ಉಪಕರಣವು ಕೇವಲ ಪ್ರಾಥಮಿಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಗಂಭೀರ ರೋಗಲಕ್ಷಣಗಳಿಗಾಗಿ, ತಕ್ಷಣ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
        symptomCategoryLabel: 'ನೀವು ಯಾವ ರೀತಿಯ ರೋಗಲಕ್ಷಣಗಳನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದೀರಿ?',
        selectCategory: 'ಒಂದು ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        feverCategory: 'ಜ್ವರ ಮತ್ತು ಸಾಮಾನ್ಯ',
        digestiveCategory: 'ಜೀರ್ಣಕಾರಿ ಸಮಸ್ಯೆಗಳು',
        respiratoryCategory: 'ಉಸಿರಾಟದ ಸಮಸ್ಯೆಗಳು',
        specificSymptomsLabel: 'ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ರೋಗಲಕ್ಷಣಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ:',
        severityLabel: 'ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳು ಎಷ್ಟು ಗಂಭೀರವಾಗಿವೆ?',
        selectSeverity: 'ತೀವ್ರತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        mild: 'ಸಾಧಾರಣ',
        moderate: 'ಮಧ್ಯಮ',
        severe: 'ತೀವ್ರ',
        symptomDurationLabel: 'ಈ ರೋಗಲಕ್ಷಣಗಳು ನಿಮಗೆ ಎಷ್ಟು ದಿನಗಳಿಂದ ಇವೆ?',
        selectDuration: 'ಅವಧಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        lessThanDay: 'ಒಂದು ದಿನಕ್ಕಿಂತ ಕಡಿಮೆ',
        '1-3Days': '1-3 ದಿನಗಳು',
        '3-7Days': '3-7 ದಿನಗಳು',
        moreThanWeek: 'ಒಂದು ವಾರಕ್ಕಿಂತ ಹೆಚ್ಚು',
        additionalNotesLabel: 'ಹೆಚ್ಚುವರಿ ಟಿಪ್ಪಣಿಗಳು (ಐಚ್ಛಿಕ)',
        additionalNotesPlaceholder: 'ನಿಮ್ಮ ರೋಗಲಕ್ಷಣಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿ',
        analyzeSymptomsBtn: 'ರೋಗಲಕ್ಷಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
        analysisResults: 'ವಿಶ್ಲೇಷಣಾ ಫಲಿತಾಂಶಗಳು',
        newCheckBtn: 'ಹೊಸ ಪರಿಶೀಲನೆ',
        loginModalHeading: 'ಹೆಲ್ತ್‌ಕನೆಕ್ಟ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ',
        mobileNumberLabel: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
        mobileNumberPlaceholder: 'ನಿಮ್ಮ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ',
        sendOTPBtn: 'ಒಟಿಪಿ ಕಳುಹಿಸಿ',
        otpLabel: 'ಒಟಿಪಿ ನಮೂದಿಸಿ',
        otpPlaceholder: '6-ಅಂಕಿಯ ಒಟಿಪಿ ನಮೂದಿಸಿ',
        demoOTPSmall: 'ಡೆಮೊ ಒಟಿಪಿ: 123456',
        loginBtn: 'ಲಾಗಿನ್',
        emergencyModalHeading: '🚨 ತುರ್ತು ಸಂಪರ್ಕಗಳು',
        nationalEmergency: 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು',
        call108: '📞 108 ಕರೆ ಮಾಡಿ',
        nabhaHospital: 'ನಭಾ ಸಿವಿಲ್ ಆಸ್ಪತ್ರೆ',
        callHospital: '📞 ಆಸ್ಪತ್ರೆಗೆ ಕರೆ ಮಾಡಿ',
        localAmbulance: 'ಸ್ಥಳೀಯ ಆಂಬ್ಯುಲೆನ್ಸ್',
        call102: '📞 102 ಕರೆ ಮಾಡಿ',
        videoConsultationModalHeading: 'ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ',
        videoPlaceholder1: '📹 ವೀಡಿಯೊ ಕರೆ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ',
        videoPlaceholder2: 'ವೈದ್ಯರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ...',
        aiChatbot: 'AI ಚಾಟ್‌ಬಾಟ್',
        chatPlaceholder: 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...',
        sendBtn: 'ಕಳುಹಿಸಿ',
        callBtn: '📞 ಕರೆ ಮಾಡಿ',
        available: 'ಲಭ್ಯವಿದೆ',
        lowStock: 'ಕಡಿಮೆ ಸ್ಟಾಕ್',
        outOfStock: 'ಸ್ಟಾಕ್ ಇಲ್ಲ',
        experienceLabel: 'ಅನುಭವ:',
        languagesLabel: 'ಭಾಷೆಗಳು:',
        availableLabel: 'ಲಭ್ಯವಿದೆ:',
        bookingText: 'ಬುಕ್ ಮಾಡಲಾಗುತ್ತಿದೆ...',
        selectDoctorAlert: 'ದಯವಿಟ್ಟು ಮೊದಲು ವೈದ್ಯರನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        fillFieldsAlert: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ',
        bookingSuccessAlert: 'ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಬುಕ್ ಮಾಡಲಾಗಿದೆ!',
        startConsultationConfirm: 'ನೀವು ಈಗ ನಿಮ್ಮ ವೀಡಿಯೊ ಸಮಾಲೋಚನೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಬಯಸುವಿರಾ?',
        doctorLabel: 'ವೈದ್ಯರು:',
        diagnosisLabel: 'ರೋಗನಿರ್ಣಯ:',
        testLabel: 'ಪರೀಕ್ಷೆ:',
        resultLabel: 'ಫಲಿತಾಂಶ:',
        prescriptionLabel: 'ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್:',
        notesLabel: 'ಟಿಪ್ಪಣಿಗಳು:',
        availableMedicinesHeading: 'ಲಭ್ಯವಿರುವ ಔಷಧಿಗಳು:',
        searchingText: 'ಹುಡುಕಲಾಗುತ್ತಿದೆ...',
        noMedicinesFound: 'ನಿಮ್ಮ ಹುಡುಕಾಟಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ಯಾವುದೇ ಔಷಧಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ.',
        analyzingText: 'ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
        generalCareRecommended: 'ಸಾಮಾನ್ಯ ಆರೈಕೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ',
        immediateMedicalAttention: 'ತಕ್ಷಣದ ವೈದ್ಯಕೀಯ ಆರೈಕೆಯ ಅಗತ್ಯವಿದೆ',
        medicalConsultationRecommended: 'ವೈದ್ಯಕೀಯ ಸಮಾಲೋಚನೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ',
        difficulty: 'difficulty',
        chestPain: 'chest pain',
        preliminaryAnalysis: 'ಪ್ರಾಥಮಿಕ ವಿಶ್ಲೇಷಣೆ:',
        priorityLabel: 'ಆದ್ಯತೆ:',
        urgent: 'ತುರ್ತು',
        moderate: 'ಮಧ್ಯಮ',
        routine: 'ನಿಯಮಿತ',
        symptomsIdentified: 'ಗುರುತಿಸಿದ ರೋಗಲಕ್ಷಣಗಳು:',
        recommendationLabel: 'ಶಿಫಾರಸು:',
        endCallConfirm: 'ನೀವು ನಿಜವಾಗಿಯೂ ಕರೆಯನ್ನು ಕೊನೆಗೊಳಿಸಲು ಬಯಸುವಿರಾ?'
    }
};

// Application state
let currentLanguage = 'en';
let currentUser = null;
let selectedDoctor = null;
let isLoggedIn = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing HealthConnect app...');
    initializeApp();
    setupEventListeners();
    populateInitialData();
    checkOfflineStatus();
});

// Initialize application
function initializeApp() {
    // Set minimum date for appointments to today
    const today = new Date().toISOString().split('T')[0];
    const appointmentDateInput = document.getElementById('appointmentDate');
    if (appointmentDateInput) {
        appointmentDateInput.min = today;
        appointmentDateInput.value = today;
    }

    // Initialize language
    updateLanguage(currentLanguage);
    console.log('App initialized successfully');
}

// Setup all event listeners
function setupEventListeners() {
    // Navigation
    setupNavigation();
    
    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            updateLanguage(e.target.value);
        });
    }

    // Mobile menu
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('nav');
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('open');
        });
    }

    // Login/Auth
    setupAuthEvents();

    // Feature cards navigation
    setupFeatureNavigation();

    // Doctor selection
    setupDoctorSelection();

    // Booking form
    setupBookingForm();

    // Records tabs
    setupRecordsTabs();

    // Pharmacy search
    setupPharmacySearch();

    // Symptom checker
    setupSymptomChecker();

    // Emergency modal
    setupEmergencyModal();

    // Video call controls
    setupVideoCallControls();

    // Get started button
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (isLoggedIn) {
                showSection('dashboard');
            } else {
                showModal('loginModal');
            }
        });
    }

    console.log('All event listeners set up');
}

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            if (section) {
                // Special handling for symptom checker - no login required
                if (section === 'symptom-checker') {
                    showSection(section);
                    updateActiveNavLink(this);
                    return;
                }
                
                // Check if login required for certain sections
                if (!isLoggedIn && ['consultation', 'records', 'pharmacy', 'dashboard'].includes(section)) {
                    showModal('loginModal');
                    return;
                }
                
                showSection(section);
                updateActiveNavLink(this);
            }
        });
    });

    // Handle "About" link
    const aboutLinks = document.querySelectorAll('.nav-link:not([data-section])');
    aboutLinks.forEach(link => {
        if (link.textContent.includes(translations[currentLanguage].about)) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('HealthConnect - Rural Telemedicine Platform\nContact: support@healthconnect.in\nEmergency: 108');
            });
        }
    });
}

// Show specific section
function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Close mobile menu if open
    const nav = document.getElementById('nav');
    if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
    }

    // Update page title
    updatePageTitle(sectionId);
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Update page title based on section
function updatePageTitle(sectionId) {
    const titles = {
        home: 'HealthConnect - Rural Telemedicine Platform',
        dashboard: 'Patient Dashboard - HealthConnect',
        consultation: 'Book Consultation - HealthConnect',
        records: 'Health Records - HealthConnect',
        pharmacy: 'Pharmacy Locator - HealthConnect',
        'symptom-checker': 'AI Symptom Checker - HealthConnect'
    };
    
    document.title = titles[sectionId] || 'HealthConnect - Rural Telemedicine Platform';
}

// Language update function
function updateLanguage(language) {
    currentLanguage = language;
    console.log('Language updated to:', language);

    const langData = translations[language];

    if (!langData) {
        console.error('Translations for this language do not exist:', language);
        return;
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (langData[key]) {
            element.placeholder = langData[key];
        }
    });
    
    // Re-populate dynamic content after language switch
    populateInitialData();
    if(isLoggedIn) {
        updateDashboardData();
    }
}

// Authentication setup
function setupAuthEvents() {
    const loginBtn = document.getElementById('loginBtn');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');
    const sendOTPBtn = document.getElementById('sendOTP');

    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (isLoggedIn) {
                logout();
            } else {
                showModal('loginModal');
            }
        });
    }

    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', function() {
            hideModal('loginModal');
        });
    }

    if (sendOTPBtn) {
        sendOTPBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const mobileNumber = document.getElementById('mobileNumber').value;
            if (mobileNumber && mobileNumber.length === 10) {
                simulateOTPSend();
            } else {
                alert(translations[currentLanguage].mobileNumberPlaceholder);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            simulateLogin();
        });
    }
}

// Simulate OTP send
function simulateOTPSend() {
    const sendOTPBtn = document.getElementById('sendOTP');
    const originalText = sendOTPBtn.textContent;
    
    sendOTPBtn.innerHTML = `<span class="loading"><span class="spinner"></span> ${translations[currentLanguage].sendOTPBtn}</span>`;
    sendOTPBtn.disabled = true;
    
    setTimeout(() => {
        sendOTPBtn.textContent = 'Resend OTP'; // Note: This is not translated for simplicity
        sendOTPBtn.disabled = false;
        document.getElementById('otp').value = '123456'; // Pre-fill for demo
        alert(translations[currentLanguage].demoOTPSmall);
    }, 2000);
}

// Simulate login
function simulateLogin() {
    const mobileNumber = document.getElementById('mobileNumber').value;
    const otp = document.getElementById('otp').value;
    
    if (mobileNumber && otp === '123456') {
        isLoggedIn = true;
        currentUser = {
            name: 'Gurpreet Singh',
            age: 45,
            village: 'Ghanaur',
            bloodGroup: 'B+',
            mobile: mobileNumber
        };
        
        updateLoginStatus();
        hideModal('loginModal');
        showSection('dashboard');
        updateDashboardData();
    } else {
        alert(translations[currentLanguage].invalidOTPAlert);
    }
}

// Logout function
function logout() {
    isLoggedIn = false;
    currentUser = null;
    updateLoginStatus();
    showSection('home');
}

// Update login status in UI
function updateLoginStatus() {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        if (isLoggedIn) {
            loginBtn.textContent = 'Logout';
            loginBtn.className = 'btn btn--primary';
        } else {
            loginBtn.textContent = translations[currentLanguage].login;
            loginBtn.className = 'btn btn--outline';
        }
    }
}

// Feature cards navigation
function setupFeatureNavigation() {
    const featureCards = document.querySelectorAll('.feature-card[data-section]');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            if (section) {
                if (!isLoggedIn && section !== 'symptom-checker') {
                    showModal('loginModal');
                } else {
                    showSection(section);
                    
                    // Update nav active state
                    const navLink = document.querySelector(`.nav-link[data-section="${section}"]`);
                    if (navLink) {
                        updateActiveNavLink(navLink);
                    }
                }
            }
        });
    });
}

// Populate initial data
function populateInitialData() {
    populateDoctors();
    populatePharmacies();
    populateHealthTimeline();
    console.log('Initial data populated');
}

// Update dashboard with user data
function updateDashboardData() {
    if (!currentUser) return;

    // Update patient info
    const patientNameEl = document.getElementById('patientName');
    const patientAgeEl = document.getElementById('patientAge');
    const patientVillageEl = document.getElementById('patientVillage');
    const patientBloodGroupEl = document.getElementById('patientBloodGroup');

    if (patientNameEl) patientNameEl.textContent = currentUser.name;
    if (patientAgeEl) patientAgeEl.textContent = currentUser.age;
    if (patientVillageEl) patientVillageEl.textContent = currentUser.village;
    if (patientBloodGroupEl) patientBloodGroupEl.textContent = currentUser.bloodGroup;

    // Populate upcoming appointments
    populateUpcomingAppointments();
    
    // Populate recent records
    populateRecentRecords();
}

// Populate upcoming appointments
function populateUpcomingAppointments() {
    const container = document.getElementById('upcomingAppointments');
    if (!container) return;

    container.innerHTML = '';
    
    appData.appointments.forEach(appointment => {
        const appointmentDiv = document.createElement('div');
        appointmentDiv.className = 'appointment-item';
        appointmentDiv.innerHTML = `
            <h4>${appointment.doctor}</h4>
            <p>${translations[currentLanguage].date} ${formatDate(appointment.date)}</p>
            <p>${translations[currentLanguage].time} ${appointment.time}</p>
            <p>${translations[currentLanguage].status} <span class="status status--${appointment.status.toLowerCase() === 'confirmed' ? 'success' : 'warning'}">${translations[currentLanguage][appointment.status.toLowerCase()]}</span></p>
        `;
        container.appendChild(appointmentDiv);
    });
}

// Populate recent records
function populateRecentRecords() {
    const container = document.getElementById('recentRecords');
    if (!container) return;

    container.innerHTML = '';
    
    appData.healthRecords.slice(0, 2).forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.className = 'record-item';
        recordDiv.innerHTML = `
            <h4>${translations[currentLanguage].consultation}</h4>
            <p>${translations[currentLanguage].date} ${formatDate(record.date)}</p>
            <p>${record.diagnosis || record.test}: ${record.prescription || record.result}</p>
        `;
        container.appendChild(recordDiv);
    });
}

// Populate doctors list
function populateDoctors() {
    const container = document.getElementById('doctorsList');
    if (!container) return;

    container.innerHTML = '';
    
    appData.doctors.forEach(doctor => {
        const doctorDiv = document.createElement('div');
        doctorDiv.className = 'doctor-card';
        doctorDiv.setAttribute('data-doctor-id', doctor.id);
        
        doctorDiv.innerHTML = `
            <div class="doctor-header">
                <div>
                    <div class="doctor-name">${doctor.name}</div>
                    <div class="doctor-specialization">${doctor.specialization}</div>
                </div>
                <div class="doctor-rating">
                    ⭐ ${doctor.rating}
                </div>
            </div>
            <div class="doctor-info">
                <span>${translations[currentLanguage].experienceLabel} ${doctor.experience} years</span>
                <span>${translations[currentLanguage].languagesLabel} ${doctor.languages.join(', ')}</span>
                <span>${translations[currentLanguage].availableLabel} ${doctor.availability}</span>
            </div>
        `;
        
        container.appendChild(doctorDiv);
    });
}

// Setup doctor selection
function setupDoctorSelection() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.doctor-card')) {
            const doctorCard = e.target.closest('.doctor-card');
            const doctorId = parseInt(doctorCard.getAttribute('data-doctor-id'));
            
            // Remove previous selection
            document.querySelectorAll('.doctor-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add selection to clicked card
            doctorCard.classList.add('selected');
            
            // Update selected doctor
            selectedDoctor = appData.doctors.find(doctor => doctor.id === doctorId);
            
            // Update form
            const selectedDoctorInput = document.getElementById('selectedDoctor');
            if (selectedDoctorInput && selectedDoctor) {
                selectedDoctorInput.value = `${selectedDoctor.name} - ${selectedDoctor.specialization}`;
            }
        }
    });
}

// Setup booking form
function setupBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBookingSubmission();
        });
    }

    // Setup dashboard quick booking buttons
    const quickBookingBtns = document.querySelectorAll('button[data-section="consultation"]');
    quickBookingBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (isLoggedIn) {
                showSection('consultation');
            } else {
                showModal('loginModal');
            }
        });
    });
}

// Handle booking submission
function handleBookingSubmission() {
    if (!selectedDoctor) {
        alert(translations[currentLanguage].selectDoctorAlert);
        return;
    }

    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const symptoms = document.getElementById('symptoms').value;
    const consultationType = document.querySelector('input[name="consultationType"]:checked')?.value;

    if (!appointmentDate || !appointmentTime) {
        alert(translations[currentLanguage].fillFieldsAlert);
        return;
    }

    // Simulate booking
    const submitBtn = document.querySelector('#bookingForm button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = `<span class="loading"><span class="spinner"></span> ${translations[currentLanguage].bookingText}</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
        // Add to appointments
        const newAppointment = {
            id: Date.now(),
            doctor: selectedDoctor.name,
            date: appointmentDate,
            time: appointmentTime,
            status: 'Confirmed',
            type: consultationType === 'video' ? 'Video Consultation' : 'Audio Consultation'
        };
        
        appData.appointments.unshift(newAppointment);
        
        alert(translations[currentLanguage].bookingSuccessAlert);
        
        // Reset form
        document.getElementById('bookingForm').reset();
        document.querySelectorAll('.doctor-card').forEach(card => {
            card.classList.remove('selected');
        });
        selectedDoctor = null;
        const selectedDoctorInput = document.getElementById('selectedDoctor');
        if (selectedDoctorInput) selectedDoctorInput.value = '';
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Update dashboard
        if (isLoggedIn) {
            populateUpcomingAppointments();
        }
        
        // Ask if user wants to start consultation
        if (confirm(translations[currentLanguage].startConsultationConfirm)) {
            showVideoCallModal();
        }
    }, 2000);
}

// Setup records tabs
function setupRecordsTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab content
            tabContents.forEach(content => content.classList.remove('active'));
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Populate health timeline
function populateHealthTimeline() {
    const timeline = document.querySelector('#recordsTimeline .timeline');
    if (!timeline) return;

    timeline.innerHTML = '';
    
    appData.healthRecords.forEach(record => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${formatDate(record.date)}</div>
            <div class="timeline-content">
                <h4>${translations[currentLanguage].consultation}</h4>
                ${record.doctor ? `<p><strong>${translations[currentLanguage].doctorLabel}</strong> ${record.doctor}</p>` : ''}
                ${record.diagnosis ? `<p><strong>${translations[currentLanguage].diagnosisLabel}</strong> ${record.diagnosis}</p>` : ''}
                ${record.test ? `<p><strong>${translations[currentLanguage].testLabel}</strong> ${record.test}</p>` : ''}
                ${record.result ? `<p><strong>${translations[currentLanguage].resultLabel}</strong> ${record.result}</p>` : ''}
                ${record.prescription ? `<p><strong>${translations[currentLanguage].prescriptionLabel}</strong> ${record.prescription}</p>` : ''}
                ${record.notes ? `<p><strong>${translations[currentLanguage].notesLabel}</strong> ${record.notes}</p>` : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Populate pharmacies
function populatePharmacies() {
    const container = document.getElementById('pharmaciesList');
    if (!container) return;

    container.innerHTML = '';
    
    appData.pharmacies.forEach(pharmacy => {
        const pharmacyDiv = document.createElement('div');
        pharmacyDiv.className = 'pharmacy-card';
        
        const medicinesHtml = pharmacy.medicines.map(medicine => {
            const statusClass = medicine.availability === 'Available' ? 'success' : 
                                medicine.availability === 'Low Stock' ? 'warning' : 'error';
            
            return `
                <div class="medicine-item">
                    <div class="medicine-info">
                        <div class="medicine-name">${medicine.name}</div>
                        <div class="medicine-price">₹${medicine.price}</div>
                    </div>
                    <span class="status status--${statusClass}">${translations[currentLanguage][medicine.availability.toLowerCase().replace(' ', '')]}</span>
                </div>
            `;
        }).join('');
        
        pharmacyDiv.innerHTML = `
            <div class="pharmacy-header">
                <div>
                    <div class="pharmacy-name">${pharmacy.name}</div>
                    <div class="pharmacy-location">${pharmacy.location}</div>
                </div>
                <div class="pharmacy-distance">${pharmacy.distance}</div>
            </div>
            <div class="medicines-list">
                <h4>${translations[currentLanguage].availableMedicinesHeading}</h4>
                ${medicinesHtml}
            </div>
            <div style="margin-top: 12px;">
                <a href="tel:${pharmacy.contact}" class="btn btn--primary btn--sm">${translations[currentLanguage].callBtn}</a>
            </div>
        `;
        
        container.appendChild(pharmacyDiv);
    });
}

// Setup pharmacy search
function setupPharmacySearch() {
    const searchBtn = document.getElementById('searchMedicine');
    const searchInput = document.getElementById('medicineSearch');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performMedicineSearch();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performMedicineSearch();
            }
        });
    }
}

// Perform medicine search
function performMedicineSearch() {
    const searchTerm = document.getElementById('medicineSearch').value.toLowerCase().trim();
    
    if (!searchTerm) {
        populatePharmacies(); // Show all pharmacies
        return;
    }
    
    const container = document.getElementById('pharmaciesList');
    if (!container) return;
    
    container.innerHTML = `<div class="loading"><span class="spinner"></span> ${translations[currentLanguage].searchingText}</div>`;
    
    setTimeout(() => {
        const filteredResults = [];
        
        appData.pharmacies.forEach(pharmacy => {
            const matchingMedicines = pharmacy.medicines.filter(medicine => 
                medicine.name.toLowerCase().includes(searchTerm)
            );
            
            if (matchingMedicines.length > 0) {
                filteredResults.push({
                    ...pharmacy,
                    medicines: matchingMedicines
                });
            }
        });
        
        if (filteredResults.length === 0) {
            container.innerHTML = `<p>${translations[currentLanguage].noMedicinesFound}</p>`;
        } else {
            container.innerHTML = '';
            filteredResults.forEach(pharmacy => {
                const pharmacyDiv = document.createElement('div');
                pharmacyDiv.className = 'pharmacy-card';
                
                const medicinesHtml = pharmacy.medicines.map(medicine => {
                    const statusClass = medicine.availability === 'Available' ? 'success' : 
                                         medicine.availability === 'Low Stock' ? 'warning' : 'error';
                    
                    return `
                        <div class="medicine-item">
                            <div class="medicine-info">
                                <div class="medicine-name">${medicine.name}</div>
                                <div class="medicine-price">₹${medicine.price}</div>
                            </div>
                            <span class="status status--${statusClass}">${translations[currentLanguage][medicine.availability.toLowerCase().replace(' ', '')]}</span>
                        </div>
                    `;
                }).join('');
                
                pharmacyDiv.innerHTML = `
                    <div class="pharmacy-header">
                        <div>
                            <div class="pharmacy-name">${pharmacy.name}</div>
                            <div class="pharmacy-location">${pharmacy.location}</div>
                        </div>
                        <div class="pharmacy-distance">${pharmacy.distance}</div>
                    </div>
                    <div class="medicines-list">
                        <h4>${translations[currentLanguage].availableMedicinesHeading}</h4>
                        ${medicinesHtml}
                    </div>
                    <div style="margin-top: 12px;">
                        <a href="tel:${pharmacy.contact}" class="btn btn--primary btn--sm">${translations[currentLanguage].callBtn}</a>
                    </div>
                `;
                
                container.appendChild(pharmacyDiv);
            });
        }
    }, 1000);
}

// Setup symptom checker
function setupSymptomChecker() {
    const symptomForm = document.getElementById('symptomForm');
    const categorySelect = document.getElementById('symptomCategory');
    const newSymptomCheckBtn = document.getElementById('newSymptomCheck');
    
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            updateSymptomsList(this.value);
        });
    }
    
    if (symptomForm) {
        symptomForm.addEventListener('submit', function(e) {
            e.preventDefault();
            analyzeSymptoms();
        });
    }
    
    if (newSymptomCheckBtn) {
        newSymptomCheckBtn.addEventListener('click', function() {
            resetSymptomChecker();
        });
    }

    // Book consultation from symptom results
    const bookConsultationBtns = document.querySelectorAll('button[data-section="consultation"]');
    bookConsultationBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (isLoggedIn) {
                showSection('consultation');
            } else {
                showModal('loginModal');
            }
        });
    });
}

// Update symptoms list based on category
function updateSymptomsList(category) {
    const container = document.getElementById('symptomsList');
    if (!container) return;
    
    container.innerHTML = '';
    
    const categoryData = appData.symptoms.find(s => s.category.toLowerCase() === category.toLowerCase());
    
    if (categoryData) {
        categoryData.symptoms.forEach((symptom, index) => {
            const checkboxDiv = document.createElement('label');
            checkboxDiv.className = 'checkbox-option';
            checkboxDiv.innerHTML = `
                <input type="checkbox" name="symptoms" value="${symptom}" id="symptom${index}">
                <span>${symptom}</span>
            `;
            container.appendChild(checkboxDiv);
        });
    }
}

// Analyze symptoms
function analyzeSymptoms() {
    const formData = new FormData(document.getElementById('symptomForm'));
    const category = formData.get('symptomCategory');
    const selectedSymptoms = formData.getAll('symptoms');
    const severity = formData.get('severity');
    const duration = formData.get('symptomDuration');
    const notes = formData.get('additionalNotes');
    
    if (!category || selectedSymptoms.length === 0 || !severity) {
        alert(translations[currentLanguage].fillFieldsAlert);
        return;
    }
    
    // Show loading
    const submitBtn = document.querySelector('#symptomForm button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = `<span class="loading"><span class="spinner"></span> ${translations[currentLanguage].analyzingText}</span>`;
    submitBtn.disabled = true;
    
    setTimeout(() => {
        displaySymptomResults(category, selectedSymptoms, severity, duration, notes);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 3000);
}

// Display symptom analysis results
function displaySymptomResults(category, symptoms, severity, duration, notes) {
    const resultsContainer = document.getElementById('symptomResults');
    const resultsContent = document.getElementById('resultsContent');
    
    if (!resultsContainer || !resultsContent) return;
    
    // Get category data
    const categoryData = appData.symptoms.find(s => s.category.toLowerCase() === category.toLowerCase());
    
    // Generate AI-like analysis
    let recommendation = translations[currentLanguage].generalCareRecommended;
    let urgency = 'routine';
    
    if (severity === 'severe' || symptoms.some(s => s.includes('difficulty') || s.includes('chest pain'))) {
        recommendation = translations[currentLanguage].immediateMedicalAttention;
        urgency = 'urgent';
    } else if (severity === 'moderate' || duration === 'more-than-week') {
        recommendation = translations[currentLanguage].medicalConsultationRecommended;
        urgency = 'moderate';
    }
    
    const urgencyClass = urgency === 'urgent' ? 'error' : urgency === 'moderate' ? 'warning' : 'info';
    
    resultsContent.innerHTML = `
        <div class="condition-item">
            <div class="condition-name">${translations[currentLanguage].preliminaryAnalysis} ${translations[currentLanguage][category + 'Category']}</div>
            <div class="condition-likelihood">
                <span class="status status--${urgencyClass}">${translations[currentLanguage].priorityLabel} ${translations[currentLanguage][urgency]}</span>
            </div>
            <div class="condition-recommendation">
                <strong>${translations[currentLanguage].symptomsIdentified}</strong> ${symptoms.join(', ')}<br>
                <strong>${translations[currentLanguage].severityLabel}</strong> ${translations[currentLanguage][severity]}<br>
                <strong>${translations[currentLanguage].symptomDurationLabel}</strong> ${translations[currentLanguage][duration.replace(/-/g, '')]}<br>
                <strong>${translations[currentLanguage].recommendationLabel}</strong> ${categoryData ? categoryData.recommendations : recommendation}
            </div>
        </div>
    `;
    
    resultsContainer.classList.remove('hidden');
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Reset symptom checker
function resetSymptomChecker() {
    document.getElementById('symptomForm').reset();
    document.getElementById('symptomsList').innerHTML = '';
    document.getElementById('symptomResults').classList.add('hidden');
}

// Setup emergency modal
function setupEmergencyModal() {
    const emergencyBtn = document.getElementById('emergencyBtn');
    const closeEmergencyModal = document.getElementById('closeEmergencyModal');
    
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showModal('emergencyModal');
        });
    }
    
    if (closeEmergencyModal) {
        closeEmergencyModal.addEventListener('click', function() {
            hideModal('emergencyModal');
        });
    }
}

// Setup video call controls
function setupVideoCallControls() {
    const muteBtn = document.getElementById('muteBtn');
    const videoBtn = document.getElementById('videoBtn');
    const screenShareBtn = document.getElementById('screenShareBtn');
    const endCallBtn = document.getElementById('endCallBtn');
    
    if (muteBtn) {
        muteBtn.addEventListener('click', function() {
            this.textContent = this.textContent === '🎤' ? '🔇' : '🎤';
        });
    }
    
    if (videoBtn) {
        videoBtn.addEventListener('click', function() {
            this.textContent = this.textContent === '📹' ? '📵' : '📹';
        });
    }
    
    if (screenShareBtn) {
        screenShareBtn.addEventListener('click', function() {
            alert('Screen sharing feature would be implemented with WebRTC in production');
        });
    }
    
    if (endCallBtn) {
        endCallBtn.addEventListener('click', function() {
            if (confirm(translations[currentLanguage].endCallConfirm)) {
                hideModal('videoCallModal');
                showConsultationSummary();
            }
        });
    }
}

// Show video call modal
function showVideoCallModal() {
    showModal('videoCallModal');
    startCallTimer();
}

// Start call timer
function startCallTimer() {
    const timer = document.getElementById('callTimer');
    if (!timer) return;
    
    let seconds = 0;
    const interval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        // Stop timer when modal is hidden
        if (document.getElementById('videoCallModal').classList.contains('hidden')) {
            clearInterval(interval);
        }
    }, 1000);
}

// Show consultation summary
function showConsultationSummary() {
    const timerEl = document.getElementById('callTimer');
    const duration = timerEl ? timerEl.textContent : '05:30';
    
    const summary = `
    Consultation Summary:
    - Duration: ${duration}
    - Doctor: ${selectedDoctor ? selectedDoctor.name : 'Dr. Rajesh Kumar'}
    - Type: Video Consultation
    - Status: Completed

    A prescription and follow-up instructions have been sent to your health records.
    `;
    
    alert(summary);
    
    // Add consultation to records
    const newRecord = {
        date: new Date().toISOString().split('T')[0],
        type: 'Consultation',
        doctor: selectedDoctor ? selectedDoctor.name : 'Dr. Rajesh Kumar',
        diagnosis: 'Video consultation completed',
        prescription: 'Prescription sent to pharmacy',
        notes: 'Follow up in 1 week if symptoms persist'
    };
    
    appData.healthRecords.unshift(newRecord);
    populateHealthTimeline();
}

// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (!modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        });
        document.body.style.overflow = 'auto';
    }
});

// Check offline status
function checkOfflineStatus() {
    const offlineIndicator = document.getElementById('offlineIndicator');
    
    function updateOnlineStatus() {
        if (offlineIndicator) {
            if (navigator.onLine) {
                offlineIndicator.classList.add('hidden');
            } else {
                offlineIndicator.classList.remove('hidden');
            }
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Initial check
    updateOnlineStatus();
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Export functions for global access
window.showSection = showSection;
window.showModal = showModal;
window.hideModal = hideModal;

const chatbotCircle = document.getElementById('chatbot-circle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotSendBtn = document.getElementById('chatbot-send-btn');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chat window
chatbotCircle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
    chatbotInput.focus();
});

// Send message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;

    // Display user message
    const userMsg = document.createElement('div');
    userMsg.classList.add('user-message');
    userMsg.textContent = message;
    chatbotMessages.appendChild(userMsg);

    chatbotInput.value = '';
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Simulate bot response (replace this with AI API call)
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.classList.add('bot-message');
        botMsg.textContent = "🤖 This is a demo response. You said: " + message;
        chatbotMessages.appendChild(botMsg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 800);
}

// Event listeners
chatbotSendBtn.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
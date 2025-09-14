// Telemedicine Application JavaScript - Complete Version

// Application data
const appData = {
  doctors: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "General Medicine",
      experience: 15,
      languages: ["Hindi", "Punjabi", "English"],
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
      languages: ["Punjabi", "Hindi", "English"],
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
    if (link.textContent.includes('About')) {
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
        alert('Please enter a valid 10-digit mobile number');
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
  
  sendOTPBtn.innerHTML = '<span class="loading"><span class="spinner"></span> Sending...</span>';
  sendOTPBtn.disabled = true;
  
  setTimeout(() => {
    sendOTPBtn.textContent = 'Resend OTP';
    sendOTPBtn.disabled = false;
    document.getElementById('otp').value = '123456'; // Pre-fill for demo
    alert('OTP sent successfully! (Demo OTP: 123456)');
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
    alert('Invalid OTP. Please use 123456 for demo.');
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
      loginBtn.textContent = 'Login';
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
      <p>Date: ${formatDate(appointment.date)}</p>
      <p>Time: ${appointment.time}</p>
      <p>Status: <span class="status status--${appointment.status.toLowerCase() === 'confirmed' ? 'success' : 'warning'}">${appointment.status}</span></p>
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
      <h4>${record.type}</h4>
      <p>Date: ${formatDate(record.date)}</p>
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
        <span>Experience: ${doctor.experience} years</span>
        <span>Languages: ${doctor.languages.join(', ')}</span>
        <span>Available: ${doctor.availability}</span>
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
    alert('Please select a doctor first');
    return;
  }

  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;
  const symptoms = document.getElementById('symptoms').value;
  const consultationType = document.querySelector('input[name="consultationType"]:checked')?.value;

  if (!appointmentDate || !appointmentTime) {
    alert('Please fill in all required fields');
    return;
  }

  // Simulate booking
  const submitBtn = document.querySelector('#bookingForm button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  submitBtn.innerHTML = '<span class="loading"><span class="spinner"></span> Booking...</span>';
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
    
    alert('Appointment booked successfully!');
    
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
    if (confirm('Would you like to start your video consultation now?')) {
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
        <h4>${record.type}</h4>
        ${record.doctor ? `<p><strong>Doctor:</strong> ${record.doctor}</p>` : ''}
        ${record.diagnosis ? `<p><strong>Diagnosis:</strong> ${record.diagnosis}</p>` : ''}
        ${record.test ? `<p><strong>Test:</strong> ${record.test}</p>` : ''}
        ${record.result ? `<p><strong>Result:</strong> ${record.result}</p>` : ''}
        ${record.prescription ? `<p><strong>Prescription:</strong> ${record.prescription}</p>` : ''}
        ${record.notes ? `<p><strong>Notes:</strong> ${record.notes}</p>` : ''}
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
          <span class="status status--${statusClass}">${medicine.availability}</span>
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
        <h4>Available Medicines:</h4>
        ${medicinesHtml}
      </div>
      <div style="margin-top: 12px;">
        <a href="tel:${pharmacy.contact}" class="btn btn--primary btn--sm">📞 Call</a>
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
  
  container.innerHTML = '<div class="loading"><span class="spinner"></span> Searching...</div>';
  
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
      container.innerHTML = '<p>No medicines found matching your search.</p>';
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
              <span class="status status--${statusClass}">${medicine.availability}</span>
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
            <h4>Available Medicines:</h4>
            ${medicinesHtml}
          </div>
          <div style="margin-top: 12px;">
            <a href="tel:${pharmacy.contact}" class="btn btn--primary btn--sm">📞 Call</a>
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
    alert('Please fill in all required fields');
    return;
  }
  
  // Show loading
  const submitBtn = document.querySelector('#symptomForm button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.innerHTML = '<span class="loading"><span class="spinner"></span> Analyzing...</span>';
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
  let recommendation = 'General care recommended';
  let urgency = 'routine';
  
  if (severity === 'severe' || symptoms.some(s => s.includes('difficulty') || s.includes('chest pain'))) {
    recommendation = 'Immediate medical attention required';
    urgency = 'urgent';
  } else if (severity === 'moderate' || duration === 'more-than-week') {
    recommendation = 'Medical consultation recommended';
    urgency = 'moderate';
  }
  
  const urgencyClass = urgency === 'urgent' ? 'error' : urgency === 'moderate' ? 'warning' : 'info';
  
  resultsContent.innerHTML = `
    <div class="condition-item">
      <div class="condition-name">Preliminary Analysis: ${category}-related condition</div>
      <div class="condition-likelihood">
        <span class="status status--${urgencyClass}">Priority: ${urgency.toUpperCase()}</span>
      </div>
      <div class="condition-recommendation">
        <strong>Symptoms identified:</strong> ${symptoms.join(', ')}<br>
        <strong>Severity:</strong> ${severity}<br>
        <strong>Duration:</strong> ${duration}<br>
        <strong>Recommendation:</strong> ${categoryData ? categoryData.recommendations : recommendation}
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
      if (confirm('Are you sure you want to end the call?')) {
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

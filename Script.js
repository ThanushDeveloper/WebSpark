"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
const frameworksLanguagesExpertiesButtons = [
  {
    name: "Flutter",
    icon: "./assets/images/svg/flutter.svg",
  },
  {
    name: "Dart",
    icon: "./assets/images/svg/dart.svg",
  },
  {
    name: "FlutterFlow",
    icon: "./assets/images/svg/flutterflow.svg",
  },
  {
    name: "Android Native",
    icon: "./assets/images/svg/android.svg",
  },
  {
    name: "Kotlin",
    icon: "./assets/images/svg/kotlin.svg",
  },
  {
    name: "iOS Native",
    icon: "./assets/images/svg/iOS.png",
  },
  {
    name: "TypeScript",
    icon: "./assets/images/svg/typeScript.svg",
  },
  {
    name: "JavaScript",
    icon: "./assets/images/svg/javascript.svg",
  },
];

const paymentGatewayExpertiesButtons = [
  {
    name: "Razorpay",
    icon: "./assets/images/svg/razorpay.png",
  },
  {
    name: "Stripe",
    icon: "./assets/images/svg/stripe.svg",
  },
  {
    name: "In App Purchase",
    icon: "./assets/images/svg/iap.svg",
  },
  {
    name: "Braintree",
    icon: "./assets/images/svg/braintree.svg",
  },
  {
    name: "Google Pay",
    icon: "./assets/images/svg/google-pay.svg",
  },
];
const apiServicesExpertiesButtons = [
  {
    name: "REST API",
    icon: "./assets/images/svg/api.svg",
  },
  {
    name: "GraphQL",
    icon: "./assets/images/svg/graphql.svg",
  },
];
const uiUXToolsExpertiesButtons = [
  {
    name: "Figma",
    icon: "./assets/images/svg/figma.svg",
  },
  {
    name: "Framer",
    icon: "./assets/images/svg/framer.svg",
  },
  {
    name: "Whimsical",
    icon: "./assets/images/svg/whimsical.jpg",
  },
];
const unitTestingExpertiesButtons = [
  {
    name: "Widget Tests",
    icon: "./assets/images/svg/widget.png",
  },
  {
    name: "Unit Tests",
    icon: "./assets/images/svg/unit-testing.png",
  },
  {
    name: "Integration Tests",
    icon: "./assets/images/svg/integration-testing.webp",
  },
];
const upgradeServicesExpertiesButtons = [
  {
    name: "Puro",
    icon: "./assets/images/svg/puro.png",
  },
  {
    name: "FVM",
    icon: "./assets/images/svg/fvm.svg",
  },
];
const deploymentProcessExpertiesButtons = [
  "Cirrus",
  "Travis",
  "Codemagic",
  "Bitrise",
];
const stateManagementExpertiesButtons = [
  {
    name: "Provider",
    icon: "./assets/images/svg/provider.png",
  },
  {
    name: "BLoC",
    icon: "./assets/images/svg/bloc.png",
  },
  {
    name: "GetX",
    icon: "./assets/images/svg/getx.png",
  },
  {
    name: "Riverpod",
    icon: "./assets/images/svg/riverpod.svg",
  },
];
const projectManagementToolsExpertiesButtons = [
  {
    name: "asana",
    icon: "./assets/images/svg/asana.svg",
  },
  {
    name: "Slack",
    icon: "./assets/images/svg/slack.svg",
  },
  {
    name: "Jira",
    icon: "./assets/images/svg/jira.svg",
  },
  {
    name: "Trello",
    icon: "./assets/images/svg/trello.svg",
  },
];
const crashReportingExpertiesButtons = [
  {
    name: "Firebase Crashlytics",
    icon: "./assets/images/svg/firebase-crashlytics.png",
  },
  {
    name: "Sentry",
    icon: "./assets/images/svg/sentry.svg",
  },
];
const deploymentExpertiesButtons = [
  {
    name: "Google Play Stroe",
    icon: "./assets/images/svg/google-play.png",
  },
  {
    name: "App Stroe",
    icon: "./assets/images/svg/app-store.svg",
  },
  {
    name: "Web",
    icon: "./assets/images/svg/web.svg",
  },
  {
    name: "Microsoft Store",
    icon: "./assets/images/svg/microsoft-store.png",
  },
  {
    name: "Linux",
    icon: "./assets/images/svg/linux.svg",
  },
];
const codeReviewExpertiesButtons = [
  {
    name: "Flutter Analyze",
    icon: "./assets/images/svg/flutter-analyze.svg",
  },
  {
    name: "Effective Dart-Default IDE Static Analysis",
    icon: "./assets/images/svg/code-Effective.png",
  },
  {
    name: "pana",
    icon: "./assets/images/svg/pana.png",
  },
];
const databaseExpertiesButtons = [
  {
    name: "Local Storage",
    icon: "./assets/images/svg/local-database.png",
  },
  {
    name: "Sqlite",
    icon: "./assets/images/svg/sqlite.svg",
  },
  {
    name: "Firebase Firestore",
    icon: "./assets/images/svg/firebase-firestore.png",
  },
  {
    name: "Firebase realtime database",
    icon: "./assets/images/svg/firebase-realtime.png",
  },
  {
    name: "Supabase",
    icon: "./assets/images/svg/supabase.svg",
  },
  {
    name: "Hive",
    icon: "./assets/images/svg/hive.png",
  },
  {
    name: "ObjectBox",
    icon: "./assets/images/svg/objectbox.png",
  },
];
const versionControlExpertiesButtons = [
  {
    name: "Git",
    icon: "./assets/images/svg/git.svg",
  },
  {
    name: "Github",
    icon: "./assets/images/svg/github.svg",
  },
  {
    name: "BitBucket",
    icon: "./assets/images/svg/bitbucket.svg",
  },
];
const tootlUtilitiesExpertiesButtons = [
  {
    name: "Android Studio",
    icon: "./assets/images/svg/android-studio.svg",
  },
  {
    name: "Visual Studio Code",
    icon: "./assets/images/svg/visual-studio-code.svg",
  },
  {
    name: "XCode",
    icon: "./assets/images/svg/xcode.svg",
  },
  {
    name: "Postman",
    icon: "./assets/images/svg/postman-icon.svg",
  },
];
const plugnisExpertiesButtons = [
  {
    name: "Firebase",
    icon: "./assets/images/svg/firebase.svg",
  },
  {
    name: "OneSignal Notifications",
    icon: "./assets/images/svg/onesignal.svg",
  },
  {
    name: "In-App-Purchase",
    icon: "./assets/images/svg/iap.svg",
  },
  {
    name: "Google Map",
    icon: "./assets/images/svg/google-map.svg",
  },
  {
    name: "Social Login",
    icon: "./assets/images/svg/social-login.png",
  },
  {
    name: "Notifications",
    icon: "./assets/images/svg/notification.png",
  },
  {
    name: "Injectable",
    icon: "./assets/images/svg/injectable.svg",
  },
  {
    name: "Json Serializable",
    icon: "./assets/images/svg/json.svg",
  },
];

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const overlay = document.querySelector("[data-overlay]");
const testimonialImg = document.querySelector("[data-testimonials-avatar]");

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

function createButtonListWithIcon(buttonNames, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  buttonNames.forEach((item) => {
    const button = document.createElement("button");
    const icon = document.createElement("img"); // Use img instead of span
    icon.className = "icon";
    icon.src = item.icon;
    icon.alt = `${item.name} icon`;

    button.className = "toolBtn";
    button.textContent = item.name;
    button.appendChild(icon);
    container.appendChild(button);
  });
}

// Call the function with different lists and container IDs
createButtonListWithIcon(
  frameworksLanguagesExpertiesButtons,
  "frameworksLanguagesExperties"
);

createButtonListWithIcon(
  paymentGatewayExpertiesButtons,
  "paymentGatewayExperties"
);
createButtonListWithIcon(plugnisExpertiesButtons, "plugnisExperties");
createButtonListWithIcon(
  tootlUtilitiesExpertiesButtons,
  "tootlUtilitiesExperties"
);
createButtonListWithIcon(
  versionControlExpertiesButtons,
  "versionControlExperties"
);
createButtonListWithIcon(databaseExpertiesButtons, "databaseExperties");
createButtonListWithIcon(apiServicesExpertiesButtons, "apiServicesExperties");
createButtonListWithIcon(codeReviewExpertiesButtons, "codeReviewExperties");
createButtonListWithIcon(deploymentExpertiesButtons, "deploymentExperties");
createButtonListWithIcon(
  crashReportingExpertiesButtons,
  "crashReportingExperties"
);
createButtonListWithIcon(
  projectManagementToolsExpertiesButtons,
  "projectManagementToolsExperties"
);

createButtonListWithIcon(
  stateManagementExpertiesButtons,
  "stateManagementExperties"
);
createButtonListWithIcon(
  upgradeServicesExpertiesButtons,
  "upgradeServicesExperties"
);
createButtonListWithIcon(unitTestingExpertiesButtons, "unitTestingExperties");
createButtonListWithIcon(uiUXToolsExpertiesButtons, "uiUXToolsExperties");

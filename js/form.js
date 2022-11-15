const family_doctors_info = {
    "рибалка 21": {
        "лікар": "Тезер Аліна Олександрівна",
        "вільні-дати-і-часи": {
            "15.11": ["10:25", "12:25", "17:00"],
            "16.11": ["9:30", "14:45"]
        }
    },
    "Раптовий Лев": "Лозовий Павло Викторович"
};

const patientFirstName = document.querySelector("#patient-firstname input");
const patientLastName = document.querySelector("#patient-lastname input");
const address_field = document.getElementById("address");
const family_doctor_label = document.getElementById("family-doctor");
const dateBlock = document.getElementById("date");
const timeBlock = document.getElementById("time");


address_field.addEventListener("change", function (e) {
    clearDateTime();
    if (family_doctors_info[address_field.value.toLowerCase()]) {
        family_doctor_label.innerText = family_doctors_info[address_field.value.toLowerCase()]["лікар"];
        family_doctor_label.style.fontStyle = "normal";
        family_doctor_label.style.color = "black";
        showDateTime(family_doctors_info);
    } else {
        family_doctor_label.innerText = "не визначено";
        family_doctor_label.style.fontStyle = "italic";
        family_doctor_label.style.color = "#999";
    }
})

function showDateTime(obj) {
    const workDatetimeObj = obj[address_field.value.toLowerCase()]["вільні-дати-і-часи"];
    for (var date in workDatetimeObj) {
        // для кожної дати з об'єкта створюємо відповідну кнопку та додаємо у блок дат
        const dateBtn = document.createElement("button");
        dateBtn.value = date;
        dateBtn.innerText = date;
        dateBlock.appendChild(dateBtn);
        dateBtn.addEventListener("click", showTime);
    }

    function showTime(e) {
        // видаляємо усі минулі часи
        while (timeBlock.firstChild) {
            timeBlock.removeChild(timeBlock.firstChild);
        }
        e.target.style.backgroundColor = "rgb(67, 192, 192)";
        // створюємо кнопки із часом та додаємо у блок часів
        for (var time of workDatetimeObj[e.target.value]) {
            const timeBtn = document.createElement("button");
            timeBtn.value = time;
            timeBtn.innerText = time;
            timeBlock.appendChild(timeBtn);
            timeBtn.addEventListener("click", function (e) {
                e.target.style.backgroundColor = "rgb(67, 192, 192)";

            })
        }
    }
}

function clearDateTime() {
    while (dateBlock.firstChild) {
        dateBlock.removeChild(dateBlock.firstChild);
    }
}

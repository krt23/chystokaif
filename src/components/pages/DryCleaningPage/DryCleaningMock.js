import React from "react";
import couch from "../../../assets/img/sofa/couch.png"
import couch_2 from "../../../assets/img/sofa/couch_2.png"
import couch_3 from "../../../assets/img/sofa/couch_3.png"
import couch_4 from "../../../assets/img/sofa/couch_4.png"
import ottoman from "../../../assets/img/sofa/ottoman.png"
import pillow from "../../../assets/img/sofa/pillow.png"
import armchair from "../../../assets/img/chair/armchair.png"
import bean from "../../../assets/img/chair/bean.png"
import chair from "../../../assets/img/chair/chair.png"
import desk from "../../../assets/img/chair/desk.png"
import officeChair from "../../../assets/img/chair/office-chair.png"
import stool from "../../../assets/img/chair/stool.png"
import kids_1 from "../../../assets/img/mattress/kids_1.png"
import kids_2 from "../../../assets/img/mattress/kids_2.png"
import mattress_1 from "../../../assets/img/mattress/mattress_1.png"
import mattress_2 from "../../../assets/img/mattress/mattress_2.png"

export const stages = [
    "Поверхневе видалення бруду та пилу.",
    "Глибоке видалення внутрішніх забруднень.",
    "Нанесення спеціального мийного засобу під тиском.",
    "Видалення плям, запахів, дезінфекція.",
    "Дворівневе промивання водою.",
    "Висушування у звичайних умовах (від 4-7 годин)."

];

export const pollution = [
    "діти (плями та сеча)",
    "запахи (стара їжа, нікотин)",
    "тварини (шерсть, сеча)",
    " їжа (вино, кава, кетчуп)",
    "потертості (жирні плями)",
    "мікроорганізми (пилові кліщі)"
];


export const prices = {
    captions: ["Дивани", "Крісла та стільці", "Матраци"],
    sofa: [
        {id: 1, img: ottoman,  name: "Диван 160 см", price: "500 грн"},
        {id: 2, img: couch, name: "Диван 200 см", price: "600 грн"},
        {id: 3, img: couch_2, name: "Диван 350 см", price: "1000-1100 грн"},
        {id: 4, img: couch_4, name: "Диван 500 см", price: "1500 грн"},
        {id: 5, img: pillow, name: "Декоративні подушки", price: "від 35 грн"},
        {id: 6, img: couch_3, name: "Розкладна частина", price: "+200 грн"}
    ],
    chair: [
        {id: 1, img: stool, name: "Стілець без спинки", price: "50 грн"},
        {id: 2, img: desk, name: "Стілець з спинкою", price: "80 грн"},
        {id: 3, img: officeChair, name: "Офісне крісло", price: "80 грн"},
        {id: 4, img: bean, name: "Пуф", price: "від 50 грн"},
        {id: 5, img: chair, name: "М'яке крісло", price: "250 грн"},
        {id: 6, img: armchair, name: "М'яке крісло", price: "350 грн"}
    ],
    mattress: [
        {id: 1, img: kids_1, name: "Дитячий матрац", price: "350 грн"},
        {id: 2, img: kids_2, name: "Односпальний матрац (120*)", price: "350 грн"},
        {id: 3, img: mattress_2, name: "Двоспальний матрац (160*80)", price: "350 грн"},
        {id: 4, img: mattress_1, name: "Двоспальний матрац (KING SIZE 200*180)", price: "350 грн"}
    ],
    carpet: {
        name: "Килими, ковролінове покриття",
        price: "від 50 грн/м²"
    }
};

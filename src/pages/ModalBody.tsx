import { IonAvatar, IonContent, IonItem, IonLabel } from "@ionic/react";

const data = [
    {
        name: "Express",
        text: "Pengiriman 1-5 hari",
        avatar: "assets/icon/SVG Uang.svg"
    },
    {
        name: "Regular",
        text: "Pengiriman 5-10 hari",
        avatar: "assets/icon/SVG Uang.svg"
    }
];

export const ModalBody = ({}) => (
    <IonContent>

        {data.map(person => (
            <IonItem>
                <IonAvatar slot="start">
                    <img src={person.avatar} alt="avatar"></img>
                </IonAvatar>
                <IonLabel>
                    <h2>{person.name}</h2>
                    <p>{person.text}</p>
                </IonLabel>
            </IonItem>
        ))}
    </IonContent>
);
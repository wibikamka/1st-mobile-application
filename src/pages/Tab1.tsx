import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Tambahkan Daftar */}
        <IonList>
          <IonItem button>
            <IonLabel>Item 1</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Item 2</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Item 3</IonLabel>
          </IonItem>
        </IonList>

        {/* Tambahkan Beberapa Tombol */}
        <div style={{ padding: '16px' }}>
          <IonButton expand="full" color="primary">Tombol 1</IonButton>
          <IonButton expand="full" color="secondary" style={{ marginTop: '8px' }}>Tombol 2</IonButton>
        </div>

        {/* Komponen Eksplorasi */}
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

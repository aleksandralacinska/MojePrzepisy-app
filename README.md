# MojePrzepisy-app
Aplikacja "Moje Przepisy" w ramach projektu na przedmiot Tworzenie hybrydowych aplikacji mobilnych


Moje Przepisy to aplikacja mobilna, która umożliwia użytkownikom zarządzanie własnymi przepisami kulinarnymi. Dzięki aplikacji możesz dodawać przepisy, edytować je, oznaczać ulubione oraz przechowywać zdjęcia potraw.

---

## Funkcjonalności

- **Dodawanie przepisów**:
  - Możliwość podania nazwy potrawy, listy składników, opisu oraz załączenia zdjęcia z galerii telefonu.
  
- **Edytowanie przepisów**:
  - Możliwość zmiany nazwy, składników, opisu oraz zdjęcia dla już zapisanych przepisów.

- **Przeglądanie przepisów**:
  - Wszystkie dodane przepisy wyświetlane są w zakładce „Moje przepisy”.
  
- **Ulubione przepisy**:
  - Możliwość oznaczania przepisów jako ulubione, które są potem widoczne w dedykowanej zakładce „Ulubione”.

- **Ekran powitalny**:
  - Powitanie użytkownika i przejście do strony głównej aplikacji.

---

### Technologie

- **React Native**: Tworzenie aplikacji mobilnej.
- **Expo**: Przyspieszenie rozwoju i zarządzania projektem React Native.
- **Zustand**: Zarządzanie globalnym stanem aplikacji.
- **useState**: Hook React do zarządzania stanem np. dla zdjęć, składników itp.
- **StyleSheet**: Stylizacja komponentów React Native.
- **globalStyles.js**: Plik, w którym zdefiniowane zostały style globalne dla wybranych elementów aplikacji (np. wygląd przycisku Button).
- **expo-router**: System nawigacji.
- **react-native-safe-area**: Prawidłowe wyświetlanie zawartości w obszarach bezpiecznych urządzenia.
- **expo-image-picker**: Obsługa wyboru zdjęć z galerii.
- **expo-font**: Ładowanie niestandardowych fontów (Montserrat z Google Fonts).
- **@expo/vector-icons**: Zestaw gotowych ikon do użycia w aplikacji.
- **TextInput**: Pola do wprowadzania danych w formularzach.
- **FlatList**: Renderowanie list składników i przepisów.
- **komponenty**: View, Text, Image, ScrollView, Pressable, StatusBar, onLongPress

---

#### Instrukcja obsługi

- Aby przejść do ekranu głównego, należy nacisnąć na przycisk "przejdź do ekranu głównego" na ekranie powitalnym
- Na dole strony widoczny jest panel nawigacji z trzema zakładkami. Aby przejść do danego widoku, naley wybrać odpowiednią zakładkę.
- Na stronie głównej można wybrać przycisk umożliwiający dodanie nowego przepisu.
- W widoku dodawania przepisu należy wpisać przynajmniej nazwę potrawy, aby móc zapisać rekord. Dodatkowo, użytkownik ma możliwość dodania zdjęcia potrawy (z rolki telefonu), składników oraz opisu czynności.
- Aby dodać składnik do listy, należy wpisać tekst w odpowiednie pole i zatwierdzić przyciskiem "+ dodaj".
- Aby usunąć dodany do listy składnik, należy przytrzymać palcem wybraną pozycję na liście i zatwierdzić usunięcie wybranego składnika.
- Aby zapisać wprowadzony przepis, należy zatwierdzić operację przyciskiem "Zapisz przepis" u dołu strony.
- W widoku Moje przepisy widzimy listę przepisów użytkownika. Domyślnie jest wprowadzonych kilka pozycji.
- Aby usunąć wybrany przepis z listy, należy przytrzymać palcem wybraną pozycję na liście i zatwierdzić usunięcie rekordu.
- Aby przejść do szczegółów danego przepisu, należy kliknąć na wybraną pozycję na liście.
- W widoku szczegółów można oznaczyć przepis jako ulubiony za pomocą ikony serduszka w prawym górnym rogu.
- Aby edytować istniejący przepis, należy kliknąć na przycisk "edytuj".
- Po zmianie wybranych parametrów przepisu, należy zapisać zmiany za pomocą przycisku "zapisz zmiany".
- Wszystkie widoki, których zawartość przekracza rozmiar ekranu, można scrollować w górę i w dół.
- Strzałka powrotu umieszczona w lewym górnym rogu umożliwia powrót do widoku zakładki, w której znajdowaliśmy się poprzednio.


##### Uruchomienie aplikacji na urządzenia mobilnym

- upewnij się, że masz zainstalowane odpowiednie narzędzia: Node.js, npm, Expo CLI
- przejdź do katalogu projektu
- zainstaluj zależności za pomocą komendy "npm install"
- uruchom aplikację za pomocą komendy "npx expo start"
- zeskanuj kod QR i uruchom aplikację na swoim urządzeniu za pomocą Expo Go (urządzenia muszą być w tej samej sieci Wi-Fi)

* w przypadku problemów możesz użyć komendy "npx expo start -c" lub "npx expo start --tunnel"

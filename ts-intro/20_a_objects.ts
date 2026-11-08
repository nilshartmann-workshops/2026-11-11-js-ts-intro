// @ts-nocheck
export default undefined;

// VORBEREITUNG:
//  - Entferne die erste Zeile in dieser DAtei ("// @ts-nocheck")
//    - Damit "aktivierst" du TypeScript in dieser Datei
//    - Deine IDE zeigt dir jetzt TS-Fehler an (wenn es welche gibt)
//
// AUFGABE:
//  - Beschreibe ein Objekt 'Person' mit den folgenden Eigenschaften:
//    - salutation (String oder null)
//    - firstname (String)
//    - age (Zahl)
//    - hobby (String, optional)
//    - greet: Eine Funktion, die einen String entgegennimmt und einen String zurückliefert
//
// ZUSATZAUFGABE:
//  - siehe unten
//
// REFERENZ:
//  Type Aliase: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
//  Objekt-Typen: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
//  Beschreiben von Funktionssignaturen: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
//  Für die Zusatzaufgabe:
//   Type Narrowing mit in-Operator: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

type Person = {
	// todo: beschreiben
}

// wenn Person korrekt beschrieben ist, dann dürfen hier
// keine Fehler angezeigt werden:

const p1: Person = {
	firstname: "Susi",
	salutation: "Ms",
	age: 32,
	hobby: "JavaScript",
	greet(p) { return `Hello, ${p}`}
}
const p2: Person = {
	firstname: "Susi",
	salutation: null,
	age: 32,
	greet(p) { return `Hello, ${p}`}
}

// ZUSATZ-AUFGABE
//   - Definiere einen zweiten Typen "Animal",
//      der nur eine Eigenschaft hat:
//       - "name" (String)
//   - Implementiere eine Funktion "greet",
//     die einen Parameter hat, der sowohl
//      Animal als auch Person sein kann, so dass man
//      die Funktion mit einer Person, aber auch mit einem
//      Animal aufrufen kann.
//   - Kannst du in der _Implementierung_ der Funktion unterscheiden,
//      ob ein Animal oder eine Person übergeben wurde,
//      und dann einen entsprechenden Gruß ausgeben:
//       - wenn Animal: dessen "name" verwenden
//       - wenn Person: deren "firstname" verwenden
//   -
type Animal = {
	// name
}
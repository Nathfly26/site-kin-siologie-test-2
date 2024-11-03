export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-sage-900 mb-8">
        Bienvenue dans votre espace bien-être
      </h1>
      
      <div className="prose prose-lg text-sage-800">
        <h2 className="text-2xl font-semibold mb-4">La Kinésiologie : Une approche holistique du bien-être</h2>
        
        <p className="mb-6">
          La kinésiologie est une approche thérapeutique douce qui permet d'identifier
          et de corriger les déséquilibres énergétiques du corps. En utilisant le test
          musculaire comme outil de biofeedback, nous pouvons dialoguer avec votre corps
          pour comprendre l'origine de vos blocages et stress.
        </p>

        <h3 className="text-xl font-semibold mb-3">Les bienfaits de la kinésiologie</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Réduction du stress et de l'anxiété</li>
          <li>Amélioration des performances</li>
          <li>Soulagement des douleurs chroniques</li>
          <li>Renforcement de la confiance en soi</li>
          <li>Meilleure gestion des émotions</li>
          <li>Optimisation de l'apprentissage</li>
        </ul>

        <p className="mb-6">
          Chaque séance est personnalisée et adaptée à vos besoins spécifiques,
          vous permettant de retrouver équilibre et harmonie dans votre vie quotidienne.
        </p>
      </div>
    </div>
  );
}
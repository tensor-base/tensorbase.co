import { Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tensor Base - Pricing",
    description: "Choose a plan that works for you.",
};

const pricingPlans = [
    {
        name: 'Free plan',
        description: 'The best way to start using EAS, no credit card required.',
        price: 'Free',
        priceDetail: '',
        isPopular: false,
        features: [
            '30 mobile app builds per month',
            'Submit to the app stores',
            'Send updates to 1,000 MAUs',
        ],
    },
    {
        name: 'Starter plan',
        description: 'For developers ready to launch real-world apps.',
        price: '$19/month',
        priceDetail: '+ additional usage',
        isPopular: true,
        features: [
            '$30 of build credit',
            'Skip the line with high priority builds',
            'Send updates to 3,000 MAUs',
        ],
    },
    {
        name: 'Production plan',
        description: 'For teams with growing user bases.',
        price: '$99/month',
        priceDetail: '+ additional usage',
        isPopular: false,
        features: [
            '$100 of build credit',
            'Send updates to 50,000 MAUs',
            '2 build concurrencies',
        ],
    },
    {
        name: 'Enterprise plan',
        description: 'Advanced features for large apps and established teams.',
        price: '$1999/month',
        priceDetail: '+ additional usage',
        isPopular: false,
        features: [
            '$1000 of build credit',
            'Send updates to 1,000,000 MAUs',
            '5 build concurrencies',
        ],
    },
];

const PricingPage = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Make incredible apps.
                        <br />
                        With pricing to match.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
                        Build, submit, and update your app, all with pricing that scales as you grow. Great for AI/ML development and deployment.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`flex flex-col border rounded-xl p-6 ${plan.isPopular ? 'border-blue-500' : 'border-gray-700'}`}
                        >
                            <div className="flex-grow">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                                    {plan.isPopular && (
                                        <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                            Popular
                                        </span>
                                    )}
                                </div>
                                <p className="mt-4 text-sm text-gray-400">{plan.description}</p>
                                <div className="mt-6">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.priceDetail && (
                                        <span className="text-sm text-gray-400 ml-1">{plan.priceDetail}</span>
                                    )}
                                </div>
                                <a
                                    href="#"
                                    className="mt-6 block w-full text-center rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700/50"
                                >
                                    Select Plan
                                </a>
                            </div>
                            <ul className="mt-8 space-y-4 text-sm text-gray-300 border-t border-gray-700 pt-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="w-4 h-4 mr-3 mt-1 text-green-400 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;

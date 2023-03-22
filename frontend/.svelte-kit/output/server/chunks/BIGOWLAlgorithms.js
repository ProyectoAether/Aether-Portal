const BIGOWLAlgorithms = [
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/creator",
    object: "Aether Group"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/PredictingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/TestingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#MachineLearningAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/solves",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLProblems/Problem"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/SVMPredict",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationPredictingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/SVM",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/WebServiceAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/DataProcessingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "BIGOWLAlgorithms Ontology"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ClassificationModelingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ModelingAlgorithm"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ModelingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#MachineLearningAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/solves",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/KNNTesting",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationTestingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/RFPredict",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationPredictingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/title",
    object: "BIGOWLAlgorithms"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/SVMTesting",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/PredictingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#MachineLearningAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/license",
    object: "https://opensource.org/licenses/MIT"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DTCTesting",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/created",
    object: "2022-07-14T09:00:00"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DTCPredict",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://www.w3.org/2002/07/owl#imports",
    object: "https://w3id.org/BIGOWLData"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/KNNPredict",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationPredictingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/SVMPredict",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/RFTesting",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataProcessingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/vocab/vann/preferredNamespaceUri",
    object: "https://w3id.org/BIGOWLAlgorithms"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataProcessingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/Algorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ConvNetLSTM",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ClassificationModelingAlgorithm"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#MachineLearningAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/DataAnalysingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DTC",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ClassificationModelingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/vocab/vann/preferredNamespacePrefix",
    object: "BIGOWLAlgorithms"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataFlowAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataSinkAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/KNNPredict",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataCollectionAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/Algorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DTCPredict",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationPredictingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DTC",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/publisher",
    object: "Aether Group"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ConvNetLSTMPredict",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationPredictingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/rights",
    object: "(c) Aether Group"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataAnalysingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/Algorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ConvNetLSTMTesting",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationTestingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataSinkAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/Algorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/KNNTesting",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://www.w3.org/2002/07/owl#imports",
    object: "https://w3id.org/BIGOWLProblems"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ClassificationPredictingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/PredictingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Ontology"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ClassificationTestingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/KNN",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ClassificationModelingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ClassificationPredictingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ConvNetLSTMPredict",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://www.w3.org/2002/07/owl#versionIRI",
    object: "https://w3id.org/BIGOWLAlgorithms"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/KNN",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/RF",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ClassificationModelingAlgorithm"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#MachineLearningAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ClassificationTestingAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/TestingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataCollectionAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/solves",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLAlgorithms/Algorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/RFPredict",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/SVMTesting",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationTestingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/TestingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DTCTesting",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationTestingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/RF",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/WebServiceAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataAnalysingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ConvNetLSTMTesting",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/description",
    object: " This ontology covers all possible kinds. It has two main subclasses: DataMiningAlgorithm and OptimizationAlgorithm, which are used to distinguish between these two families of algorithms. The former is included in the form of equivalence with the class DM-Algorithm, which is linked from DMOP."
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/Algorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/ConvNetLSTM",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/RFTesting",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/ClassificationTestingAlgorithm"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ClassificationModelingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ModelingAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/SVM",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#ClassificationModelingAlgorithm"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms",
    predicate: "http://purl.org/dc/terms/rights",
    object: "Aether"
  },
  {
    subject: "https://w3id.org/BIGOWLAlgorithms/DataFlowAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLAlgorithms/Algorithm"
  }
];
export {
  BIGOWLAlgorithms as default
};

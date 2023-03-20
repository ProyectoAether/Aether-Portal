const BIGOWLWorkflows = [
  {
    subject: "N294d53510fd241ada22a0c0b37e3badf",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "N03be2f94284d4b969c5f733b449ac5b1",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "Ne519a73ce18c45409d2b1ff8210a7f47"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numTask",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#int"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isCorrectWorkflow",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLAlgorithms/Algorithm"
  },
  {
    subject: "N0902b53eb40146508bb3bc5932cd850f",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/specifiesInputClass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLData/Data"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDocumentation",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Property that binds a workflow template to its documentation.\n\nhttp://www.opmw.org/ontology/hasDocumentation"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasComponent",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isAVersionOf",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "Ndd68b86986994723a34b000f0931a5e9",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/vocab/vann/preferredNamespacePrefix",
    object: "BIGOWLWorkflows"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataSink",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/correspondsToTemplate",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numberOfOutputs",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "Nf124860216cc470fa8c7a4dfe5be4a7d"
  },
  {
    subject: "N03be2f94284d4b969c5f733b449ac5b1",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2000/01/rdf-schema#Datatype"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/connectedTo",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "N0843d546abdf42dc9d9cdf0fbf9253a9",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/created",
    object: "2022-07-14T09:00:00"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataProcessing",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDocumentation",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.opmw.org/ontology/WorkflowTemplate"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numberOfInputs",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/startedAt",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasTask",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/specifiesOutputClass",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/startedAt",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/className",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Implementation"
  },
  {
    subject: "N3a54665784ef4bfa954f4b58f33ac4e7",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N1a27dee5d9504c128d1e11b96dd1d806"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isAVersionOf",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isObligatory",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#boolean"
  },
  {
    subject: "Nc219110d0927481782b6707223111bb0",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numTask",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/Task",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "N43794cb8cc2d4916af25497ec9d659f5",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "Nfe682334230d45e6a5a90ba5c17a564a",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numberOfOutputs",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#int"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDocumentation",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "Nb88e982c26fd4871b41ce187979a71c7",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "http://www.w3.org/2001/XMLSchema#dateTime"
  },
  {
    subject: "N43794cb8cc2d4916af25497ec9d659f5",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/instanceParameterOf",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/classNameSerialized",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/specifiesOutputClass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "Nc219110d0927481782b6707223111bb0"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasComponent",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/version",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/implementationLanguage",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/workflow",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasComponent",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/title",
    object: "BIGOWLWorkflows"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/version",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasParameter",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/workflow",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataSink",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/MachineLearning",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/DataAnalysing"
  },
  {
    subject: "Na7f23c98fc7d44a3938296075e525e00",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "Nfe682334230d45e6a5a90ba5c17a564a",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "N3a54665784ef4bfa954f4b58f33ac4e7"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasParameter",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "N3d237131a12244c88ba4a86340b12589"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasImplementation",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLWorkflows/Implementation"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasChannelOutput",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLWorkflows/Channel"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/correspondsToTemplate",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.opmw.org/ontology/WorkflowTemplate"
  },
  {
    subject: "N6f629c40e98a42d7a2425c089e7448aa",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataCollection",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataFlow",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataProcessing",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasImplementation",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "N1a27dee5d9504c128d1e11b96dd1d806",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataAnalysing",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Ontology"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/endedAt",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "N31fee481b28842309b5a23e0f583333d",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/wasLaunchedBy",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Workflow"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/instanceParameterOf",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/endedAt",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://www.w3.org/2002/07/owl#imports",
    object: "https://w3id.org/BIGOWLAlgorithms"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/connectedTo",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://www.w3.org/2002/07/owl#versionIRI",
    object: "https://w3id.org/BIGOWLWorkflows"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasTask",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Workflow"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasChannelOutput",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDefaultValue",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "http://purl.org/net/opmv/ns#Agent",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "Ndd68b86986994723a34b000f0931a5e9",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "N6be621390bf84d0ea820a950c960be93"
  },
  {
    subject: "N0843d546abdf42dc9d9cdf0fbf9253a9",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataIngestion",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/license",
    object: "https://opensource.org/licenses/MIT"
  },
  {
    subject: "Na69c3c673a3747efb72f408123495f88",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "N0902b53eb40146508bb3bc5932cd850f"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasImplementation",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://www.w3.org/2002/07/owl#imports",
    object: "https://w3id.org/BIGOWLData"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/classNameSerialized",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "Nbda0faab710246d1b6f3944875b97690",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "N6be621390bf84d0ea820a950c960be93",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Workflow",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/endedAt",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "The time at which an activity ended. See also prov:startedAtTime.\nhttp://www.w3.org/ns/prov#endedAtTime"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/Component",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isCorrectWorkflow",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Workflow"
  },
  {
    subject: "N3a54665784ef4bfa954f4b58f33ac4e7",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataTransform",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/DataProcessing"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataCollection",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/RemoveOutlier",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/DataProcessing"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataTransform",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "Nf15f121916474f0e86303c2cc8877034",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "Nbda0faab710246d1b6f3944875b97690"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/RemoveOutlier",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataFlow",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDataType",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLData/DataType"
  },
  {
    subject: "N1d9a3f88761843f1aa3587f2cf1cc37b",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N9af49070e1cc403698115ebcf557f478"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/implementationLanguage",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/module",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/rights",
    object: "Aether"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/range",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "Nf124860216cc470fa8c7a4dfe5be4a7d",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "Ne519a73ce18c45409d2b1ff8210a7f47",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N31fee481b28842309b5a23e0f583333d"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/className",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/private",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/range",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/MachineLearning",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isCorrectWorkflow",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#boolean"
  },
  {
    subject: "N21bc2eda377b4941b83ac623458e5749",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "Na7f23c98fc7d44a3938296075e525e00"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataAnalysing",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/connectedTo",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numTask",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Workflow"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDefaultValue",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/version",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "Nfe682334230d45e6a5a90ba5c17a564a"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDataValue",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "N6be621390bf84d0ea820a950c960be93",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N43794cb8cc2d4916af25497ec9d659f5"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDataType",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataMining",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numberOfOutputs",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "N9af49070e1cc403698115ebcf557f478",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "Nc83bbaf801724b0187b3b1f6f1ffb98c",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "Nb88e982c26fd4871b41ce187979a71c7"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "Nb7357e3ceb28491e91a77ed32e7a95cc",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/specifiesOutputClass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLData/Data"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/implementationLanguage",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Implementation"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/module",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Implementation"
  },
  {
    subject: "N9af49070e1cc403698115ebcf557f478",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "Nb7357e3ceb28491e91a77ed32e7a95cc",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasName",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "Ne519a73ce18c45409d2b1ff8210a7f47",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "http://www.w3.org/2001/XMLSchema#dateTime"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasChannelOutput",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/instanceParameterOf",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasListValue",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/range",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/SplitShuffle",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/Split"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasAlgorithm",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/WebService",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/DataProcessing"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/startedAt",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "Nc83bbaf801724b0187b3b1f6f1ffb98c"
  },
  {
    subject: "Nc83bbaf801724b0187b3b1f6f1ffb98c",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2000/01/rdf-schema#Datatype"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasListValue",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasParameter",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "Nf124860216cc470fa8c7a4dfe5be4a7d",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "N21bc2eda377b4941b83ac623458e5749"
  },
  {
    subject: "N1a27dee5d9504c128d1e11b96dd1d806",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Implementation"
  },
  {
    subject: "Nbda0faab710246d1b6f3944875b97690",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/vocab/vann/preferredNamespaceUri",
    object: "https://w3id.org/BIGOWLWorkflows"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/className",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/Implementation",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataIngestion",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/DataCollection"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDefaultValue",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "N8342f7e577174fab9f4b932ecf2d6e88",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "N1d9a3f88761843f1aa3587f2cf1cc37b"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isObligatory",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDataValue",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "N8342f7e577174fab9f4b932ecf2d6e88",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2000/01/rdf-schema#Datatype"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/module",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "Nb88e982c26fd4871b41ce187979a71c7",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N6f629c40e98a42d7a2425c089e7448aa"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/startedAt",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "The time at which an activity started. See also prov:endedAtTime.\n\nhttp://www.w3.org/ns/prov#startedAtTime"
  },
  {
    subject: "http://www.opmw.org/ontology/WorkflowTemplate",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/publisher",
    object: "Aether Group"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/rights",
    object: "(c) Aether Group"
  },
  {
    subject: "N1d9a3f88761843f1aa3587f2cf1cc37b",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "http://www.w3.org/2001/XMLSchema#anyURI"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/Channel",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/correspondsToTemplate",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Workflow"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/creator",
    object: "Aether Group"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasListValue",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isObligatory",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/specifiesInputClass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "Na69c3c673a3747efb72f408123495f88"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "BIGOWLWorkflows Ontology"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numberOfInputs",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "Ndd68b86986994723a34b000f0931a5e9"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasAlgorithm",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows",
    predicate: "http://purl.org/dc/terms/description",
    object: " This ontology is used tto guide the correct orchestration of a workflow, including elements like tasks, components, parameters, etc. This ontology imports BIGOWLData and BIGOWLAlgorithms to define all the pieces in a workflow."
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/specifiesInputClass",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "Na69c3c673a3747efb72f408123495f88",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/workflow",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/order",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#int"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDocumentation",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "N8342f7e577174fab9f4b932ecf2d6e88"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/wasLaunchedBy",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/Split",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/DataProcessing"
  },
  {
    subject: "Nc219110d0927481782b6707223111bb0",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "Nf15f121916474f0e86303c2cc8877034"
  },
  {
    subject: "Nf15f121916474f0e86303c2cc8877034",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/SplitShuffle",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/DataMining",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/BIGOWLWorkflows/MachineLearning"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/private",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/classNameSerialized",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Channel"
  },
  {
    subject: "N294d53510fd241ada22a0c0b37e3badf",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "Nb7357e3ceb28491e91a77ed32e7a95cc"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDataValue",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasTask",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/endedAt",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "N03be2f94284d4b969c5f733b449ac5b1"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/Split",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/WebService",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/wasLaunchedBy",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://purl.org/net/opmv/ns#Agent"
  },
  {
    subject: "N3d237131a12244c88ba4a86340b12589",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.w3.org/2002/07/owl#Thing"
  },
  {
    subject: "N21bc2eda377b4941b83ac623458e5749",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  },
  {
    subject: "N3d237131a12244c88ba4a86340b12589",
    predicate: "http://www.w3.org/2002/07/owl#unionOf",
    object: "N294d53510fd241ada22a0c0b37e3badf"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/order",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/BIGOWLWorkflows/Task"
  },
  {
    subject: "N0902b53eb40146508bb3bc5932cd850f",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N0843d546abdf42dc9d9cdf0fbf9253a9"
  },
  {
    subject: "N6f629c40e98a42d7a2425c089e7448aa",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/order",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/hasDataType",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "http://www.e-lico.eu/ontologies/dmo/DMOP/DMOP.owl#Parameter"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/numberOfInputs",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#int"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/Channel",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Represents a topic when a workflow is executed, this class is used for annotating the process of execution"
  },
  {
    subject: "Na7f23c98fc7d44a3938296075e525e00",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "N31fee481b28842309b5a23e0f583333d",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/private",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#boolean"
  },
  {
    subject: "https://w3id.org/BIGOWLWorkflows/isAVersionOf",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/BIGOWLWorkflows/Component"
  }
];
export {
  BIGOWLWorkflows as default
};

const Security_Graph_Databases_Ontology = [
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/roleName",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/privilegeCondition",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/Privilege"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Role",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Role"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Update",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoSecurityGraphDB/Privilege"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineElements",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoGraphDB/Element"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/RoleHasRules",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/Role"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleElement",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "A rule that affects an element."
  },
  {
    subject: "N624e678cb8b54cf2be64762a101cb567",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRule",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Security rule"
  },
  {
    subject: "Ne95e6ec4e3fd4682bf60d3ffb2bab60c",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/User",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "The User class represents the users defined in the database management system."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoGraphDB/Field"
  },
  {
    subject: "N92331662008d49b4813bbaac190d5cd7",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "Delete"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Element",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Delete",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Delete"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/creator",
    object: "Eduardo Fernández-Medina, (Universidad de Castilla - La Mancha)"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/hasPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "Nb738e17494554850953867ba4adcc54a"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineElements",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleElement"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subPropertyOf",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefined"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Create",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/hasPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Has Privileges"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/creator",
    object: "Juan Trujillo, (Universidad de Alicante)"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoGraphDB/Database"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Read",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/roleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/Role"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Relationship",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Relationship"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasRole",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Indicate the name of the user."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRule",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleSign",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "N3cffc928ee5e47f0bd5c66d40263d4cf"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/NoSQLField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoSecurityGraphDB/Field"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Node",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Node"
  },
  {
    subject: "Nbb3da0cb20d84766b1949e3a94ec2ebb",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "+"
  },
  {
    subject: "N83ebfefe1c7d4694a8dfbb139b356435",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Privilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This class represents the privileges associated with a security rule."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/RoleHasRules",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Relationship",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoGraphDB/Element"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/User",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "User"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userPass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "User has Password"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/title",
    object: "Security Graph Databases Ontology"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Node",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoGraphDB/Element"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/hasDatatype",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.ontologies.khaos.uma.es/bigowl/DataType"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/roleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Indicate the name of the role."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasSecurityRule",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "N624e678cb8b54cf2be64762a101cb567",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N92331662008d49b4813bbaac190d5cd7"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "user has name"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleSign",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "N83ebfefe1c7d4694a8dfbb139b356435",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "Update"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/HasSubRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Role Has Subrole"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Ontology"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/rights",
    object: "(c) Aether Group"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/vocab/vann/preferredNamespacePrefix",
    object: "OntoSecurityGraphDB"
  },
  {
    subject: "Ne95e6ec4e3fd4682bf60d3ffb2bab60c",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "-"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Read",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Read"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/RoleHasRules",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleElement",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Rule element"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleContainsPrivilege",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/modified",
    object: "2022-06-30T13:24:01"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasUser",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Database Has User"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasSecurityRule",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Rule has name"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/UserHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "User has Role"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Relationship",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Security rule define field."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRule",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Rule"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Role",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This class represents the roles that are defined in a database."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/hasPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "CRUD"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/privilegeCondition",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefined",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "N92331662008d49b4813bbaac190d5cd7",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/roleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Role has Name"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/hasPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/Privilege"
  },
  {
    subject: "N624e678cb8b54cf2be64762a101cb567",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "Create"
  },
  {
    subject: "N83ebfefe1c7d4694a8dfbb139b356435",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/creator",
    object: "María del Mar Roldán-García, (Universiad de Málaga)"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Database",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Database"
  },
  {
    subject: "http://purl.org/dc/terms/license",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#AnnotationProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleContainsPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Rule contains Privilege"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Create",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "This class represents the create privilege associated with a security rule."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineElements",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subPropertyOf",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefined"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasUser",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Element",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Element"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/HasSubRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/Role"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/roleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/HasSubRole",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Rule field"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleField"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/publisher",
    object: "Aether Group"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineElements",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Security rule define elements."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/User",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Delete",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/UserHasRole",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/RoleHasRules",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This property links the role with the rules."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/created",
    object: "2022-06-30T13:24:00"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/hasPrivilege",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "Nb738e17494554850953867ba4adcc54a",
    predicate: "http://www.w3.org/2002/07/owl#oneOf",
    object: "N624e678cb8b54cf2be64762a101cb567"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/citation",
    object: "Manuel Paneque, María del Mar Roldán-García, Carlos Blanco, Alejandro Maté, Eduardo Fernández-Medina, Juan Trujillo, (2022) - Ontology-based Secure Design for Graph-based Databases. W3ID. https://w3id.org/OntoSecurityGraphDB"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userPass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/NoSQLField",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/HasSubRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoSecurityGraphDB/Role"
  },
  {
    subject: "Nbb3da0cb20d84766b1949e3a94ec2ebb",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Delete",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoSecurityGraphDB/Privilege"
  },
  {
    subject: "N6eb2c38f8a1a436b8729464585ca3581",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#List"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://www.w3.org/2002/07/owl#versionIRI",
    object: "https://w3id.org/OntoSecurityGraphDB/"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/UserHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoSecurityGraphDB/Role"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Ontologie that generically encompass and represent the domain in security policies of graph-oriented database."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/UserHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/User"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://www.w3.org/2002/07/owl#imports",
    object: "https://w3id.org/OntoGraphDB/"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Role",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasUser",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoSecurityGraphDB/User"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userPass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Indicate the pass of the user."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userPass",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/User"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/license",
    object: "https://opensource.org/licenses/MIT"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/creator",
    object: "Alejandro Maté, (Universidad de Alicante)"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/creator",
    object: "Manuel Paneque, (Universidad de Málaga)"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userPass",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "A rule that affects a field."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Read",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This class represents the read privilege associated with a security rule."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Field",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "The Field class represents the concept of a security data field in any database."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/vocab/vann/preferredNamespaceUri",
    object: "https://w3id.org/OntoSecurityGraphDB/"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/issued",
    object: "2022-06-30T13:24:01"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Field",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleContainsPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineField",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Security Graph Databases Ontology"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineElements",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Security Rule define over elements."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefined",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Links the rule to the database artifact in which it is defined."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoSecurityGraphDB/Role"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Create",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoSecurityGraphDB/Privilege"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleSign",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Rule has sign"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/RoleHasRules",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Role has Rules"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/HasSubRole",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#TransitiveProperty"
  },
  {
    subject: "Nbb3da0cb20d84766b1949e3a94ec2ebb",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "Ne95e6ec4e3fd4682bf60d3ffb2bab60c"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasSecurityRule",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This property links the security rules contained in that database."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleContainsPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "https://w3id.org/OntoSecurityGraphDB/Privilege"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/privilegeCondition",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Specify if the privilege has condition"
  },
  {
    subject: "N3cffc928ee5e47f0bd5c66d40263d4cf",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2000/01/rdf-schema#Datatype"
  },
  {
    subject: "N92331662008d49b4813bbaac190d5cd7",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N6eb2c38f8a1a436b8729464585ca3581"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/UserHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Object property that binds a user to the assigned roles."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Update",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Update"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasUser",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This property links the users contained in that database."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Field",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Field"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Update",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This class represents the update privilege associated with a security rule."
  },
  {
    subject: "N6eb2c38f8a1a436b8729464585ca3581",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "N83ebfefe1c7d4694a8dfbb139b356435"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/",
    predicate: "http://purl.org/dc/terms/creator",
    object: "Carlos Blanco, (Universidad de Cantabria)"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleName",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Node",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasSecurityRule",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoGraphDB/Database"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/HasSubRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Allows defining hierarchies between roles."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleContainsPrivilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Links the rule with the privilege that the rule grants or revokes"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Privilege",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Privilege"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Create",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Create"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/privilegeCondition",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Privilege has Condition"
  },
  {
    subject: "Ne95e6ec4e3fd4682bf60d3ffb2bab60c",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest",
    object: "http://www.w3.org/1999/02/22-rdf-syntax-ns#nil"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/Database",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/NoSQLFieldGraph",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoGraphDB/NoSQLField"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Delete",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This class represents the delete privilege associated with a security rule."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "This property links the roles contained in that database."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Privilege",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoSecurityGraphDB/User"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleField",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasSecurityRule",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Database Has Security Rules"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/privilegeCondition",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineElements",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/userName",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasRole",
    predicate: "http://www.w3.org/2000/01/rdf-schema#label",
    object: "Database Has Role"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleElement",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoSecurityGraphDB/SecurityRule"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleSign",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Indicate the sign of the role."
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleSign",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Read",
    predicate: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
    object: "https://w3id.org/OntoSecurityGraphDB/Privilege"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/DatabaseHasUser",
    predicate: "http://www.w3.org/2000/01/rdf-schema#domain",
    object: "https://w3id.org/OntoGraphDB/Database"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefineField",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Security Rule define over field."
  },
  {
    subject: "Nb738e17494554850953867ba4adcc54a",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2000/01/rdf-schema#Datatype"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#range",
    object: "http://www.w3.org/2001/XMLSchema#string"
  },
  {
    subject: "https://w3id.org/OntoGraphDB/NoSQLFieldGraph",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/Update",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleElement",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#Class"
  },
  {
    subject: "N3cffc928ee5e47f0bd5c66d40263d4cf",
    predicate: "http://www.w3.org/2002/07/owl#oneOf",
    object: "Nbb3da0cb20d84766b1949e3a94ec2ebb"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/ruleName",
    predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
    object: "Indicate the name of the rule."
  },
  {
    subject: "N6eb2c38f8a1a436b8729464585ca3581",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first",
    object: "Read"
  },
  {
    subject: "https://w3id.org/OntoSecurityGraphDB/SecurityRuleDefined",
    predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    object: "http://www.w3.org/2002/07/owl#ObjectProperty"
  }
];
export {
  Security_Graph_Databases_Ontology as default
};
